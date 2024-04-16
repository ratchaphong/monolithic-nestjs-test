import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty({
    maxLength: 255,
    required: true,
    example: '123 Main St',
    description: 'ที่อยู่',
  })
  street: string;

  @ApiProperty({
    maxLength: 255,
    required: true,
    example: 'Springfield',
    description: 'เมือง',
  })
  city: string;

  @ApiProperty({
    maxLength: 255,
    required: true,
    example: 'IL',
    description: 'รัฐ',
  })
  state: string;

  @ApiProperty({
    maxLength: 255,
    required: true,
    example: 'USA',
    description: 'ประเทศ',
  })
  country: string;

  @ApiProperty({
    maxLength: 255,
    required: true,
    example: '12345',
    description: 'รหัสไปรษณีย์',
  })
  postcode: string;
}
