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
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiNoContentResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateCustomerProfileDto } from './dto/create-customer-profile.dto';
import { Public } from '../guards/jwt-auth.guard.utils';
import { ApiOkRes } from '../decorators/api-ok.decorator';
import { CreateCustomerProfileResponseEntity } from './entities/create-customer-profile-response.entity';
import { CustomerProfileListResponseEntity } from './entities/customer-profile-list-response.entity';
import { LoginDto } from './dto/login.dto';
import { LoginResponseEntity } from './entities/login-response.entity';
import { CustomerProfileEntity } from './entities/customer-profile.entity';
import { CustomerProfileResponseEntity } from './entities/customer-profile-response.entity';
import { UpdateCustomerProfileDto } from './dto/update-customer-profile.dto';

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
    status: 201,
  })
  create(@Body() createCustomerProfileDto: CreateCustomerProfileDto) {
    return this.customerService.create(createCustomerProfileDto);
  }

  @Get()
  @ApiOkRes(CustomerProfileListResponseEntity, {
    description: 'get all customer profiles',
  })
  findAll() {
    return this.customerService.findAll();
  }

  @Get('profile')
  @ApiOkRes(CustomerProfileResponseEntity, {
    description: 'get customer profile',
  })
  getProfile(@Request() req) {
    const { customerId } = req.user;

    return this.customerService.findOne(customerId as string);
  }

  @Post('login')
  @Public()
  @ApiBody({
    type: LoginDto,
    description: 'Request body params to login',
  })
  @ApiOkRes(LoginResponseEntity, {
    description: 'login',
    status: 201,
  })
  async login(@Body() loginDto: LoginDto) {
    return this.customerService.login(loginDto);
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
    return this.customerService.remove(customerId);
  }
}
