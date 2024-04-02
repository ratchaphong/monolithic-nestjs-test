import { ApiProperty } from '@nestjs/swagger';

export class GenerateTokenDto {
  @ApiProperty({
    maxLength: 255,
    required: true,
    example: 'a@gmail.com',
    description: '',
  })
  email: string;

  @ApiProperty({
    maxLength: 255,
    required: true,
    example: 'cf0d0d22-7ac1-4021-953f-4b7d19750632',
    description: '',
  })
  customerId: string;
}
