import { OmitType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { ConsentEntity } from './consent.entity';

@Exclude()
export class SearchConsentsEntity extends OmitType(ConsentEntity, [
  'endAt',
  'startAt',
  'updatedAt',
  'actionBy',
  'actionUserId',
  'deletedAt',
  'createdAt',
]) {
  constructor(data: SearchConsentsEntity) {
    super(data);
    Object.assign(this, data);
  }
}
