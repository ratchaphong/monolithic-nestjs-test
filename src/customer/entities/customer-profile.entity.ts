import { ApiProperty } from '@nestjs/swagger';
import { CustomerProfile } from '@prisma/client';
import { CreateAddressDto } from '../dto/create-address.dto';

export class CustomerProfileEntity implements CustomerProfile {
  constructor(partial: Partial<CustomerProfileEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    description: 'Customer ID',
    example: 'Customer ID',
    type: String,
  })
  customerId: string;

  @ApiProperty({
    description: 'First Name',
    example: 'A',
    type: String,
  })
  firstName: string;

  @ApiProperty({
    description: 'Last Name',
    example: 'B',
    type: String,
  })
  lastName: string;

  @ApiProperty({
    description: 'Email',
    example: 'a@gmail.com',
    type: String,
  })
  email: string;

  @ApiProperty({
    description: 'User ID',
    example: 'User ID',
    type: String,
  })
  userId: string;

  @ApiProperty({
    description: 'Username',
    example: 'Username',
    type: String,
  })
  username: string;

  @ApiProperty({
    description: 'Password',
    example: 'Password',
    type: String,
  })
  password: string;

  @ApiProperty({
    description: 'Address',
    type: CreateAddressDto,
  })
  address: CreateAddressDto;
}
