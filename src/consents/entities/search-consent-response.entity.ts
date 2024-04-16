import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { SearchConsentEntity } from './search-consent.entity';

export class SearchConsentResponseEntity {
  @ApiProperty({
    description: 'find all consents',
    type: SearchConsentEntity,
  })
  @Type(() => SearchConsentEntity)
  consent: SearchConsentEntity | null;
}
