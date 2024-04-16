import { OmitType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { ConsentContentEntity } from './consent-content.entity';

export class CreateConsentContentEntity extends OmitType(ConsentContentEntity, [
  'deletedAt',
  'updatedAt',
  'consentId',
  'createdAt',
]) {
  @Exclude()
  deletedAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  consentId: string;

  @Exclude()
  createdAt: Date;

  constructor(data: CreateConsentContentEntity) {
    super(data);
    Object.assign(this, data);
  }
}
