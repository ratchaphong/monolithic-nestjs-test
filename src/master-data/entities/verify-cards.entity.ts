import { ApiProperty } from '@nestjs/swagger';
import { Prisma, VerifyCard } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';

export class VerifyCardsEntity implements VerifyCard {
  constructor(partial: Partial<VerifyCardsEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    description: 'Verify-card Id',
    example: 'e4e1ccb8-1c95-4656-80e6-5137bb1fa783',
    type: String,
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: 'รหัสประเภทบัตร',
    example: 'VC001',
    type: String,
  })
  @Expose()
  code: string;

  @ApiProperty({
    description: 'ประเภทบัตรภาษาไทย',
    example: 'บัตรประชาชน',
    type: String,
  })
  @Expose()
  nameTh: string;

  @ApiProperty({
    description: 'ประเภทบัตรภาษาอังกฤษ',
    example: 'ID Card',
    type: String,
  })
  @Expose()
  nameEn: string;

  @ApiProperty({
    description: 'วันที่มีผลบังคับใช้',
    example: '2023-09-28T13:19:12.986Z',
    type: Date,
  })
  @Expose()
  effectiveStartDate: Date;

  @ApiProperty({
    description: 'วันที่สิ้นสุดผลบังคับใช้',
    example: '2024-09-28T13:19:12.986Z',
    type: Date,
  })
  @Expose()
  effectiveEndDate: Date;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  platforms: Prisma.JsonValue;
}
