import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class LoginResponseEntity {
  @ApiProperty({
    description: 'login',
    type: String,
  })
  @Type(() => String)
  accessToken: String;
}
