// import { ApiProperty } from '@nestjs/swagger';
// import { Consent } from '@prisma/client';
// import { Expose } from 'class-transformer';

// export class ConsentEntity implements Consent {
//   constructor(partial: Partial<ConsentEntity>) {
//     Object.assign(this, partial);
//   }

//   @ApiProperty({
//     description: 'Id',
//     example: 'Id',
//     type: String,
//   })
//   @Expose()
//   id: string;

//   @ApiProperty({
//     description: 'Name',
//     example: 'Name',
//     type: String,
//   })
//   @Expose()
//   name: string;

//   @ApiProperty({
//     description: 'Category',
//     example: 'Category',
//     type: String,
//   })
//   @Expose()
//   category: string;

//   @ApiProperty({
//     description: 'Consent Type',
//     example: 'Consent Type',
//     type: String,
//   })
//   @Expose()
//   consentType: string;

//   @ApiProperty({
//     description: 'State',
//     example: 'State',
//     type: String,
//   })
//   @Expose()
//   state: string;

//   @ApiProperty({
//     description: 'Consent Sequence',
//     example: 1,
//     type: Number,
//   })
//   @Expose()
//   sequence: number;

//   @ApiProperty({
//     description: 'วันสิ้นสุดการใช้งาน',
//     example: new Date(),
//     type: Date,
//   })
//   @Expose()
//   endAt: Date;

//   @ApiProperty({
//     description: 'วันสิ้นสุดการใช้งาน',
//     example: new Date(),
//     type: Date,
//   })
//   @Expose()
//   startAt: Date;

//   @ApiProperty({
//     description: 'วันสิ้นสุดการใช้งาน',
//     example: new Date(),
//     type: Date,
//   })
//   @Expose()
//   createdAt: Date;

//   @ApiProperty({
//     description: 'แก้ไขเมื่อ',
//     example: new Date(),
//     type: Date,
//   })
//   @Expose()
//   updatedAt: Date;

//   @ApiProperty({
//     description: 'Action By',
//     example: new Date(),
//     type: Date,
//   })
//   @Expose()
//   actionBy: string;

//   @ApiProperty({
//     description: 'Action User Id',
//     example: new Date(),
//     type: Date,
//   })
//   @Expose()
//   actionUserId: string;

//   @ApiProperty({
//     description: 'วันที่ลบรายการ',
//     example: new Date(),
//     type: Date,
//   })
//   @Expose()
//   deletedAt: Date;
// }
