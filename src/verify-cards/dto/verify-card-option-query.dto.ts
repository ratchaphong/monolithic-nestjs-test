import { ApiProperty } from '@nestjs/swagger';
// import { Platform } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';

// export enum Platform {
//   DIRECT_WEB = 'DIRECT_WEB',
//   E_AGENT= 'E_AGENT',
// }

export class VerifyCardOptionQueryDto {
  @ApiProperty({
    description: 'สำหรับ query แยกแต่ละ platform เช่น direct-web และ e-agent',
    type: String,
    // enum: Platform,
    required: false,
    // example: Platform.DIRECT_WEB,
    example: 'E_AGENT',
  })
  @IsOptional()
  @IsString()
  // platform: Platform = Platform.DIRECT_WEB;
  platform = 'DIRECT_WEB';
}
