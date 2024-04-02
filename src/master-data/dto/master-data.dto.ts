import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class MasterDataDto {
  @IsOptional()
  @ApiProperty({ description: 'รหัสจังหวัดจดทะเบียน', required: false })
  provinceRegistrationCode: string;

  @IsOptional()
  @ApiProperty({ description: 'รหัสจังหวัด', required: false })
  provinceCode: string;

  @IsOptional()
  @ApiProperty({ description: 'รหัสอำเภอ/เขต', required: false })
  districtCode: string;

  @IsOptional()
  @ApiProperty({ description: 'รหัสตำบล/แขวง', required: false })
  subDistrictCode: string;

  @IsOptional()
  @ApiProperty({
    description: 'รหัสประเภทบัตรที่ใช้ยืนยันตัวตน',
    required: false,
  })
  verifyCardCode: string;

  @IsOptional()
  @ApiProperty({ description: 'รหัสยี่ห้อรถ', required: false })
  vehicleBrandCode: string;

  @IsOptional()
  @ApiProperty({ description: 'รหัสรุ่นรถ', required: false })
  vehicleModelCode: string;

  @IsOptional()
  @ApiProperty({ description: 'รหัสสีรถ', required: false })
  vehicleColorCode: string;

  @IsOptional()
  @ApiProperty({ description: 'รหัสประเภททะเบียนรถ', required: false })
  vehicleRegistrationTypeCode: string;

  @IsOptional()
  @ApiProperty({ description: 'รหัสสัญชาติ', required: false })
  nationalityCode: string;

  @IsOptional()
  @ApiProperty({ description: 'รหัสประเทศ', required: false })
  countryCode: string;

  @IsOptional()
  @ApiProperty({
    description: 'รหัสคำนำหน้า',
    required: false,
    example: '001,002',
  })
  prefixNameCode: string;
}
