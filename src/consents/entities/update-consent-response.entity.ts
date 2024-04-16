import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { SearchConsentEntity } from './search-consent.entity';

export class UpdateConsentResponseEntity {
  @ApiProperty({
    description: 'update consent',
    type: SearchConsentEntity,
  })
  @Type(() => SearchConsentEntity)
  consent: SearchConsentEntity;
}
