import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
// import { I18nContext } from 'nestjs-i18n';

@Exclude()
export class OptionEntity {
  constructor(partial: Partial<OptionEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    description: 'ข้อมูลที่ใช้',
    example: 'test',
    type: String,
    name: 'value',
  })
  @Expose({ name: 'value' })
  code: string;

  @ApiProperty({
    description: 'ข้อมูลที่แสดง (ภาษาอังกฤษ)',
    example: 'ทดสอบ',
    type: String,
    name: 'textEn',
  })
  @Expose({ name: 'textEn' })
  nameEn: string;

  @ApiProperty({
    description: 'ข้อมูลที่แสดง (ภาษาไทย)',
    example: 'ทดสอบ',
    type: String,
    name: 'textTh',
  })
  @Expose({ name: 'textTh' })
  nameTh: string;

  effectiveStartDate: Date;
  effectiveEndDate: Date;

  // @ApiProperty({
  //   description: 'ข้อมูลที่แสดง',
  //   example: 'Test Show Text',
  //   type: String,
  // })
  // @Expose()
  // text(): string {
  //   return I18nContext.current().lang === 'en'
  //     ? this.nameEn || this.nameTh
  //     : this.nameTh;
  // }
}
