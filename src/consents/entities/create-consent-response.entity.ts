import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CreateConsentEntity } from './create-consent.entity';

export class CreateConsentResponseEntity {
  @ApiProperty({
    description: 'create consent',
    type: CreateConsentEntity,
  })
  @Type(() => CreateConsentEntity)
  consent: CreateConsentEntity;
}
