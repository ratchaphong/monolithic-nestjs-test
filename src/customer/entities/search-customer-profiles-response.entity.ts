import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { SearchCustomerProfileEntity } from './search-customer-profile.entity';

export class SearchCustomerProfilesResponseEntity {
  @ApiProperty({
    description: 'get customer profiles',
    type: [SearchCustomerProfileEntity],
  })
  @Type(() => SearchCustomerProfileEntity)
  profiles: SearchCustomerProfileEntity[];
}
