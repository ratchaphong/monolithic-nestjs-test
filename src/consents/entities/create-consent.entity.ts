import { OmitType } from '@nestjs/swagger';
import { ConsentEntity } from './consent.entity';
import { Exclude } from 'class-transformer';

export class CreateConsentEntity extends OmitType(ConsentEntity, [
  'deletedAt',
  'updatedAt',
]) {
  @Exclude()
  deletedAt: Date;

  @Exclude()
  updatedAt: Date;

  constructor(data: CreateConsentEntity) {
    super(data);
    Object.assign(this, data);
  }
}
