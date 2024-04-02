import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CustomerProfileEntity } from './customer-profile.entity';

export class LoginResponseEntity {
  @ApiProperty({
    description: 'login',
    type: String,
  })
  @Type(() => String)
  accessToken: String;
}
