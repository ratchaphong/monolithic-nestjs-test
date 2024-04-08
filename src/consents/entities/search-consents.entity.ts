import { OmitType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { ConsentEntity } from './consent.entity';

export class SearchConsentsEntity extends OmitType(ConsentEntity, [
  'endAt',
  'startAt',
  'updatedAt',
  'actionBy',
  'actionUserId',
  'deletedAt',
  'createdAt',
]) {
  @Exclude()
  endAt: Date;

  @Exclude()
  startAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  actionBy: string;

  @Exclude()
  actionUserId: string;

  @Exclude()
  deletedAt: Date;

  @Exclude()
  createdAt: Date;

  constructor(data: SearchConsentsEntity) {
    super(data);
    Object.assign(this, data);
  }
}
