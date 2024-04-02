import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    maxLength: 255,
    required: true,
    example: 'a@gmail.com',
    description: 'ชื่อที่ใช้เข้าสู่ระบบ',
  })
  username: string;

  @ApiProperty({
    maxLength: 255,
    required: true,
    example: 'a1234',
    description: 'รหัสผ่าน',
  })
  password: string;
}
