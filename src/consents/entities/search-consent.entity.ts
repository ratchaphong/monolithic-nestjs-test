import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { ConsentEntity } from './consent.entity';
import { CreateConsentContentEntity } from './create-consent-content.entity';

export class SearchConsentEntity extends OmitType(ConsentEntity, [
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

  @ApiProperty({
    description: 'Search Consent Contents',
    type: CreateConsentContentEntity,
    isArray: true,
  })
  @Type(() => CreateConsentContentEntity)
  consentContents: CreateConsentContentEntity[];

  constructor(data: SearchConsentEntity) {
    super(data);
    Object.assign(this, data);
  }
}
