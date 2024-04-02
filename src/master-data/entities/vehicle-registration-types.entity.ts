import { ApiProperty } from '@nestjs/swagger';
import { VehicleRegistrationType } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';

export class VehicleRegistrationTypesEntity implements VehicleRegistrationType {
  constructor(partial: Partial<VehicleRegistrationTypesEntity>) {
    Object.assign(this, partial);
  }


  @ApiProperty({
    description: 'Vehicle Regis Id',
    example: 'e4e1ccb8-1c95-4656-80e6-5137bb1fa783',
    type: String,
  })
  @Expose()
  id: string;
  
  @ApiProperty({
    description: 'รหัสประเภททะเบียน',
    example: '001',
    type: String,
  })
  @Expose()
  code: string;
  
  @ApiProperty({
    description: 'ชื่อประเภททะเบียนภาษาไทย',
    example: 'มีทะเบียน',
    type: String,
  })
  @Expose()
  nameTh: string;
  
  @ApiProperty({
    description: 'ชื่อประเภททะเบียนภาษาอังกฤษ',
    example: 'มีทะเบียน',
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
}
