import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CreateCustomerProfileEntity } from './create-customer-profile.entity';

export class CreateCustomerProfileResponseEntity {
  @ApiProperty({
    description: 'create customer profile',
    type: CreateCustomerProfileEntity,
  })
  @Type(() => CreateCustomerProfileEntity)
  profile: CreateCustomerProfileEntity;
}
