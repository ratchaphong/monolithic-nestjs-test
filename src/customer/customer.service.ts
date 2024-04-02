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
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerProfileDto } from './dto/create-customer-profile.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateCustomerProfileResponseEntity } from './entities/create-customer-profile-response.entity';
import { CustomerProfileEntity } from './entities/customer-profile.entity';
import { CustomerProfileListResponseEntity } from './entities/customer-profile-list-response.entity';
import { CustomerProfile, Prisma } from '@prisma/client';
import { LoginResponseEntity } from './entities/login-response.entity';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { GenerateTokenDto } from './dto/generate-token.dto';
import { CustomerProfileResponseEntity } from './entities/customer-profile-response.entity';
import { UpdateCustomerProfileDto } from './dto/update-customer-profile.dto';

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
    return { profile: new CustomerProfileEntity(profile) };
  }

  async findAll(): Promise<CustomerProfileListResponseEntity> {
    const customerProfiles: Array<CustomerProfile> =
      await this.prismaService.customerProfile.findMany({
        // orderBy: { sequence: 'asc' },
      });

    return {
      profiles: customerProfiles.map(
        (e: CustomerProfile) => new CustomerProfileEntity(e),
      ),
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

  async findOne(customerId: string): Promise<CustomerProfileResponseEntity> {
    const customerProfile: CustomerProfile =
      await this.prismaService.customerProfile.findUnique({
        where: { customerId },
      });

    return {
      profile: customerProfile,
    };
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

  async remove(customerId: string) {
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
