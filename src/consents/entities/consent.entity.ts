import { ApiProperty } from '@nestjs/swagger';
import { Consent } from '@prisma/client';
import { Expose } from 'class-transformer';

@Expose()
export class ConsentEntity implements Consent {
  constructor(partial: Partial<ConsentEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    description: 'Id',
    example: 'Id',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'Name',
    example: 'Name',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Category',
    example: 'Category',
    type: String,
  })
  category: string;

  @ApiProperty({
    description: 'Consent Type',
    example: 'Consent Type',
    type: String,
  })
  consentType: string;

  @ApiProperty({
    description: 'State',
    example: 'State',
    type: String,
  })
  state: string;

  @ApiProperty({
    description: 'Consent Sequence',
    example: 1,
    type: Number,
  })
  sequence: number;

  @ApiProperty({
    description: 'วันสิ้นสุดการใช้งาน',
    example: new Date(),
    type: Date,
  })
  endAt: Date;

  @ApiProperty({
    description: 'วันเริ่มต้นการใช้งาน',
    example: new Date(),
    type: Date,
  })
  startAt: Date;

  @ApiProperty({
    description: 'วันที่สร้าง',
    example: new Date(),
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    description: 'วันที่แก้ไข',
    example: new Date(),
    type: Date,
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'ผู้ดำเนินการ',
    example: new Date(),
    type: Date,
  })
  actionBy: string;

  @ApiProperty({
    description: 'ผู้ใช้ที่ดำเนินการ',
    example: new Date(),
    type: Date,
  })
  actionUserId: string;

  @ApiProperty({
    description: 'วันที่ลบ',
    example: new Date(),
    type: Date,
  })
  deletedAt: Date;
}
