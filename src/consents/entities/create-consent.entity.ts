import { OmitType } from '@nestjs/swagger';
import { ConsentEntity } from './consent.entity';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateConsentEntity extends OmitType(ConsentEntity, [
  'deletedAt',
  'updatedAt',
]) {
  constructor(data: CreateConsentEntity) {
    super(data);
    Object.assign(this, data);
  }
}
