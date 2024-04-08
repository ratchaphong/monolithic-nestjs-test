import { ApiProperty } from '@nestjs/swagger';
import { CustomerProfile } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class CreateCustomerProfileEntity implements CustomerProfile {
  constructor(partial: Partial<CreateCustomerProfileEntity>) {
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

  // @ApiProperty({
  //   description: 'User ID',
  //   example: 'User ID',
  //   type: String,
  // })
  @Exclude() // ระบุให้ class-transformer ไม่สร้าง property สำหรับ username
  userId: string;

  // @ApiProperty({
  //   description: 'Username',
  //   example: 'username',
  //   type: String,
  // })
  @Exclude() // ระบุให้ class-transformer ไม่สร้าง property สำหรับ username
  username: string;

  // @ApiProperty({
  //   description: 'Password',
  //   example: 'Password',
  //   type: String,
  // })
  @Exclude() // ระบุให้ class-transformer ไม่สร้าง property สำหรับ username
  password: string;
}
