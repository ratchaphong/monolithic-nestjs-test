import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CustomerProfileEntity } from './customer-profile.entity';

export class CustomerProfileListResponseEntity {
  @ApiProperty({
    description: 'get customer profiles',
    type: [CustomerProfileEntity],
  })
  @Type(() => CustomerProfileEntity)
  profiles: CustomerProfileEntity[];
}
