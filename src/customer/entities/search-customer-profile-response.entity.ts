import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { SearchCustomerProfileEntity } from './search-customer-profile.entity';

export class SearchCustomerProfileResponseEntity {
  @ApiProperty({
    description: 'get customer profile',
    type: SearchCustomerProfileEntity,
  })
  @Type(() => SearchCustomerProfileEntity)
  profile: SearchCustomerProfileEntity;
}
