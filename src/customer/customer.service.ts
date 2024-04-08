import {
  BadRequestException,
  Delete,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateCustomerProfileDto } from './dto/create-customer-profile.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateCustomerProfileResponseEntity } from './entities/create-customer-profile-response.entity';
import { SearchCustomerProfilesResponseEntity } from './entities/search-customer-profiles-response.entity';
import { CustomerProfile, Prisma } from '@prisma/client';
import { LoginResponseEntity } from './entities/login-response.entity';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { GenerateTokenDto } from './dto/generate-token.dto';
import { UpdateCustomerProfileDto } from './dto/update-customer-profile.dto';
import { CreateCustomerProfileEntity } from './entities/create-customer-profile.entity';
import { SearchCustomerProfileEntity } from './entities/search-customer-profile.entity';
import { SearchCustomerProfileResponseEntity } from './entities/search-customer-profile-response.entity';

@Injectable()
export class CustomerService {
  constructor(
    private prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async create(
    req: CreateCustomerProfileDto,
  ): Promise<CreateCustomerProfileResponseEntity> {
    if (req.email) {
      const existingEmail = await this.prismaService.customerProfile.findFirst({
        where: {
          email: req.email,
        },
      });

      if (existingEmail != null) {
        throw new BadRequestException(
          'This email address has already been registered.',
        );
      }
    }

    // const existingPhone = await this.prismaService.customerProfile.findFirst({
    //   where: {
    //     phone: req.phone,
    //   },
    // });

    // if (existingPhone != null) {
    //   throw new BadRequestException(
    //     'This phone number has already been registered.',
    //   );
    // }
    const { password } = req;
    const hashedPassword: string = await bcrypt.hash(password, 10);
    const profile = await this.prismaService.customerProfile.create({
      data: { ...req, password: hashedPassword },
    });
    return { profile: new CreateCustomerProfileEntity(profile) };
  }

  async findAll(): Promise<SearchCustomerProfilesResponseEntity> {
    const customerProfiles: CustomerProfile[] =
      await this.prismaService.customerProfile.findMany({
        // orderBy: { sequence: 'asc' },
      });

    // return {
    //   profiles: customerProfiles.map((profile: CustomerProfile) => {
    //     const { username, password, userId, ...data } = profile;
    //     return new SearchCustomerProfilesEntity(data);
    //   }),
    // };
    return {
      profiles: customerProfiles.map(
        (e: CustomerProfile) => new SearchCustomerProfileEntity(e),
      ),
    };
  }

  async findOne(
    customerId: string,
  ): Promise<SearchCustomerProfileResponseEntity> {
    const customerProfile: CustomerProfile =
      await this.prismaService.customerProfile.findUnique({
        where: { customerId },
      });

    return {
      profile: new SearchCustomerProfileEntity(customerProfile),
    };
  }

  async login(loginDto: LoginDto): Promise<LoginResponseEntity> {
    const { username, password } = loginDto;

    const user = await this.prismaService.customerProfile.findFirst({
      where: { username: loginDto.username },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const hashedPassword = user.password;
    const plainTextPassword = password;
    const isPasswordValid = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const accessToken: string = await this.generateToken({
      customerId: user.customerId,
      email: user.email,
    });

    return {
      accessToken: accessToken,
    };
  }

  async generateToken(user: GenerateTokenDto): Promise<string> {
    const payload = user;
    return this.jwtService.sign(payload);
  }

  async update(
    customerId: string,
    updateCustomerProfile: UpdateCustomerProfileDto,
  ): Promise<void> {
    const existingUser = await this.prismaService.customerProfile.findFirst({
      where: { customerId: customerId },
    });

    if (!existingUser) {
      throw new HttpException(
        'User id could not be found',
        HttpStatus.NOT_FOUND,
      );
    }

    const email = updateCustomerProfile.email || existingUser.email;
    const model: Prisma.CustomerProfileCreateInput = {
      email: email,
      firstName: updateCustomerProfile.firstName,
      lastName: updateCustomerProfile.lastName,
    };

    const response = await this.prismaService.customerProfile.update({
      where: { customerId: existingUser.customerId },
      data: model,
      // include: { customerAddress: true },
    });
    console.log(response);
  }

  async remove(customerId: string): Promise<void> {
    const existingUser = await this.prismaService.customerProfile.findFirst({
      where: { customerId },
    });

    if (!existingUser) {
      throw new NotFoundException('User id could not be found');
    }
    console.log('existingUser', existingUser);

    try {
      // await this.prismaService.customerAddress.deleteMany({
      //   where: {
      //     customerId,
      //   },
      // });

      const result = await this.prismaService.customerProfile.delete({
        where: { customerId },
      });
      console.log('result: ', result);
    } catch (e) {
      console.error('name', e.name);
      console.error('message', e.message);
      console.error('status', e.status);

      throw new InternalServerErrorException(e.message);
    }
  }
}
