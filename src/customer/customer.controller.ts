import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  HttpStatus,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateCustomerProfileDto } from './dto/create-customer-profile.dto';
import { Public } from '../guards/jwt-auth.guard.utils';
import { ApiOkRes } from '../decorators/api-ok.decorator';
import { CreateCustomerProfileResponseEntity } from './entities/create-customer-profile-response.entity';
import { SearchCustomerProfilesResponseEntity } from './entities/search-customer-profiles-response.entity';
import { LoginDto } from './dto/login.dto';
import { LoginResponseEntity } from './entities/login-response.entity';
import { UpdateCustomerProfileDto } from './dto/update-customer-profile.dto';
import { SearchCustomerProfileResponseEntity } from './entities/search-customer-profile-response.entity';

// @Controller('customer')
@Controller({ version: '1', path: 'customer' })
@ApiTags('Customer')
@ApiBearerAuth()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @Public()
  @ApiBody({
    type: CreateCustomerProfileDto,
    description: 'Request body params to create customer',
  })
  @ApiOkRes(CreateCustomerProfileResponseEntity, {
    description: 'create customer',
    status: HttpStatus.CREATED,
  })
  async create(
    @Body() createCustomerProfileDto: CreateCustomerProfileDto,
  ): Promise<CreateCustomerProfileResponseEntity> {
    return await this.customerService.create(createCustomerProfileDto);
  }

  @Get()
  @ApiOkRes(SearchCustomerProfilesResponseEntity, {
    description: 'get all customer profiles',
  })
  async findAll(): Promise<SearchCustomerProfilesResponseEntity> {
    return await this.customerService.findAll();
  }

  @Get('profile')
  @ApiOkRes(SearchCustomerProfileResponseEntity, {
    description: 'get customer profile',
  })
  async getProfile(@Request() req) {
    const { customerId } = req.user;

    return await this.customerService.findOne(customerId as string);
  }

  @Post('login')
  @Public()
  @ApiBody({
    type: LoginDto,
    description: 'Request body params to login',
  })
  @ApiOkRes(LoginResponseEntity, {
    description: 'login',
    status: HttpStatus.CREATED,
  })
  async login(@Body() loginDto: LoginDto) {
    return await this.customerService.login(loginDto);
  }

  @Patch()
  @ApiBody({
    type: UpdateCustomerProfileDto,
    description: 'Request body params to update customer',
  })
  async update(
    @Request() req,
    @Body() updateCustomerProfileDto: UpdateCustomerProfileDto,
  ) {
    const { customerId } = req.user;

    return await this.customerService.update(
      customerId as string,
      updateCustomerProfileDto,
    );
  }

  @Delete(':customerId')
  @ApiParam({
    name: 'customerId',
    description: 'uuid',
    example: 'd78e61e0-a46a-4d3f-8349-6ec58551ea12',
    type: String,
  })
  // @ApiNoContentResponse({ status: HttpStatus.NO_CONTENT })
  async remove(@Param('customerId') customerId: string) {
    return await this.customerService.remove(customerId);
  }
}
