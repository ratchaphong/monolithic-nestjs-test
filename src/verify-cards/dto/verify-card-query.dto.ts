import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class VerifyCardQueryDto {
  @ApiProperty({
    description: 'สำหรับ query ',
    type: String,
    required: false,
    example: '001',
  })
  @IsString()
  code = 'DIRECT_WEB';
}
