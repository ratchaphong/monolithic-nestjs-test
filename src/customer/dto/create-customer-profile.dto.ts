import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional } from 'class-validator';
import { CreateAddressDto } from './create-address.dto';

export class CreateCustomerProfileDto {
  @ApiProperty({
    maxLength: 255,
    required: false,
    example: 'a',
    description: 'ชื่อ',
  })
  firstName: string;

  @ApiProperty({
    maxLength: 255,
    required: false,
    example: 'b',
    description: 'นามสกุล',
  })
  lastName: string;

  @ApiProperty({
    maxLength: 255,
    required: false,
    example: 'a@gmail.com',
    description: 'อีเมล',
  })
  @IsEmail()
  @IsOptional()
  email: string;

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

  @ApiProperty({
    type: CreateAddressDto,
    required: false, // ทำให้ address เป็น optional
    description: 'ข้อมูลที่อยู่',
  })
  @IsOptional() // เพิ่ม IsOptional เพื่อระบุว่า address เป็น optional
  address: CreateAddressDto;
}

// import { ApiProperty } from '@nestjs/swagger';
// import { IsEmail, IsEnum, IsOptional } from 'class-validator';
// import { MaxLengthOrNull } from 'src/config/max-length-or-null';
// import { CreateCustomerConsentDto } from './create-customer-consent.dto';
// import { CustomerAddressDto } from './customer-address.dto';
// import { CustomerDocumentDto } from './customer-document.dto';
// enum MethodType {
//   SMS = 'SMS',
//   LINE = 'LINE',
//   EMAIL = 'EMAIL',
// }
// export class CreateCustomerProfileDto {
//   // @IsString()
//   // @IsNotEmpty()
//   // @MinLength(6)

//   @ApiProperty({ maxLength: 255, required: false })
//   @MaxLengthOrNull(255)
//   firstName?: string;

//   @ApiProperty({ maxLength: 255, required: false })
//   @MaxLengthOrNull(255)
//   lastName?: string;

//   @ApiProperty({ maxLength: 255, required: false })
//   @MaxLengthOrNull(255)
//   @IsEmail()
//   @IsOptional()
//   email?: string;

//   @ApiProperty({ maxLength: 1000, required: false })
//   @MaxLengthOrNull(1000)
//   address?: string;

//   @ApiProperty({ maxLength: 255, required: false })
//   @MaxLengthOrNull(255)
//   username?: string;

//   @ApiProperty({ maxLength: 255, required: false })
//   @MaxLengthOrNull(255)
//   password?: string;

//   @ApiProperty({ maxLength: 255, required: false })
//   @MaxLengthOrNull(255)
//   nationality?: string;

//   @ApiProperty({ maxLength: 255, required: false })
//   @MaxLengthOrNull(255)
//   documentTypeKyc?: string;

//   @ApiProperty({ required: false })
//   cardImageBase64?: string;

//   @ApiProperty({ required: false })
//   faceImageBase64?: string;

//   @ApiProperty({ maxLength: 13, required: false })
//   @MaxLengthOrNull(13)
//   citizenNo?: string;

//   @MaxLengthOrNull(14)
//   @ApiProperty({ maxLength: 14, required: false })
//   laserCode?: string;

//   @ApiProperty({ maxLength: 255, required: false })
//   @MaxLengthOrNull(255)
//   govermentCard?: string;

//   @ApiProperty({ maxLength: 255, required: false })
//   @MaxLengthOrNull(255)
//   passportNo?: string;

//   @ApiProperty({
//     type: `string`,
//     format: `date-time`,
//     required: false,
//   })
//   cardExpiryDate?: Date;

//   @ApiProperty({ maxLength: 255, required: false })
//   @MaxLengthOrNull(255)
//   titleName?: string;

//   @ApiProperty({
//     type: `string`,
//     format: `date-time`,
//     required: false,
//   })
//   dateOfBirth?: Date;

//   @ApiProperty({ required: false })
//   phone?: string;

//   @ApiProperty({ required: false })
//   lineId?: string;

//   @ApiProperty({ maxLength: 255, required: false })
//   @MaxLengthOrNull(255)
//   contactChannel?: string;

//   @IsEnum(MethodType, {
//     message: 'receivingChannel must be either "SMS" or "LINE" or "EMAIL"',
//   })
//   @ApiProperty({ maxLength: 50, required: false })
//   @MaxLengthOrNull(50)
//   receivingChannel?: MethodType;

//   @ApiProperty({
//     description: 'Subscribed To Notifications',
//     type: Boolean,
//     default: false,
//   })
//   subscribedToNotifications?: boolean;

//   @ApiProperty({ maxLength: 50, required: false })
//   @MaxLengthOrNull(50)
//   createdBy?: string;

//   @ApiProperty({
//     type: `string`,
//     format: `date-time`,
//     required: false,
//   })
//   createdDatetime?: Date;

//   @ApiProperty({ maxLength: 2, required: false })
//   @MaxLengthOrNull(2)
//   language?: string;

//   @ApiProperty({ type: [CustomerAddressDto], required: false })
//   customerAddress?: CustomerAddressDto[];

//   @ApiProperty({ type: [CustomerDocumentDto], required: false })
//   customerDocument?: CustomerDocumentDto[];

//   @ApiProperty({ type: [CreateCustomerConsentDto], required: false })
//   consentLog?: CreateCustomerConsentDto[];
// }
