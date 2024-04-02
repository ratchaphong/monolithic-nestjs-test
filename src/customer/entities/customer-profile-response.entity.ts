import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CustomerProfileEntity } from './customer-profile.entity';

export class CustomerProfileResponseEntity {
  @ApiProperty({
    description: 'get customer profiles',
    type: CustomerProfileEntity,
  })
  @Type(() => CustomerProfileEntity)
  profile: CustomerProfileEntity;
}
