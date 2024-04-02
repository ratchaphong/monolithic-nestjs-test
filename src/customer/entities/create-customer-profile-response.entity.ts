import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CustomerProfileEntity } from './customer-profile.entity';

export class CreateCustomerProfileResponseEntity {
  @ApiProperty({
    description: 'create customer profile',
    type: CustomerProfileEntity,
  })
  @Type(() => CustomerProfileEntity)
  profile: CustomerProfileEntity;
}
