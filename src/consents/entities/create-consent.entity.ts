import { ApiProperty, OmitType } from '@nestjs/swagger';
import { ConsentEntity } from './consent.entity';
import { Exclude, Type } from 'class-transformer';
import { CreateConsentContentEntity } from './create-consent-content.entity';

export class CreateConsentEntity extends OmitType(ConsentEntity, [
  'deletedAt',
  'updatedAt',
]) {
  @Exclude()
  deletedAt: Date;

  @Exclude()
  updatedAt: Date;

  @ApiProperty({
    description: 'Consent Contents',
    type: CreateConsentContentEntity,
    isArray: true,
  })
  @Type(() => CreateConsentContentEntity)
  consentContents: CreateConsentContentEntity[];

  constructor(data: CreateConsentEntity) {
    super(data);
    Object.assign(this, data);
  }
}
