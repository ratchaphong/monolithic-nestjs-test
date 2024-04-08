import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { DateUtility } from '../../shares/date-utility';

export class CreateConsentDto {
  @ApiProperty({
    description: 'Consent Name',
    example: 'Test Consent 1',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'ประเภทของ Consent',
    example: 'ประเภทของ Consent',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({
    description: 'Consent Type',
    example: 'Consent Type',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  consentType: string;

  @ApiProperty({
    description: 'สถานะ',
    example: 'ONLINE',
    type: String,
  })
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    description: 'วันเริ่มใช้งาน',
    example: '2024-02-16',
    type: Date,
  })
  @IsNotEmpty()
  @Transform(({ value }) =>
    DateUtility.subHours(DateUtility.setTime(new Date(value), '00:00'), 7),
  )
  @IsDate()
  startAt: Date;

  @ApiProperty({
    description: 'วันสิ้นสุดการใช้งาน',
    example: '2024-02-16',
    type: Date,
  })
  @IsNotEmpty()
  @Transform(({ value }) =>
    DateUtility.subHours(DateUtility.setTime(new Date(value), '00:00'), 7),
  )
  @IsDate()
  endAt: Date;

  @ApiProperty({
    description: 'ผู้ดำเนินการ',
    example: '123456,ทดสอบระบบ',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  actionBy: string;

  //   @ApiProperty({
  //     description: 'เนื้อหาของ Consent',
  //     type: ConsentContentDto,
  //     isArray: true,
  //   })
  //   @IsOptional()
  //   @Type(() => ConsentContentDto)
  //   @ValidateNested({ each: true })
  //   contents: ConsentContentDto[];
}
