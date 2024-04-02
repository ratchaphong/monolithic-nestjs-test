import { ApiProperty } from '@nestjs/swagger';
import { CustomerProfile } from '@prisma/client';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class CustomerProfileEntity implements CustomerProfile {
  constructor(partial: Partial<CustomerProfileEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    description: 'Customer ID',
    example: 'Customer ID',
    type: String,
  })
  @Expose()
  customerId: string;

  @ApiProperty({
    description: 'User ID',
    example: 'User ID',
    type: String,
  })
  @Expose()
  userId: string;

  @ApiProperty({
    description: 'First Name',
    example: 'A',
    type: String,
  })
  @Expose()
  firstName: string;

  @ApiProperty({
    description: 'Last Name',
    example: 'B',
    type: String,
  })
  @Expose()
  lastName: string;

  @ApiProperty({
    description: 'Email',
    example: 'a@gmail.com',
    type: String,
  })
  @Expose()
  email: string;

  @ApiProperty({
    description: 'Username',
    example: 'username',
    type: String,
  })
  @Expose()
  username: string;

  @ApiProperty({
    description: 'Password',
    example: '1234',
    type: String,
  })
  @Expose()
  password: string;
}
