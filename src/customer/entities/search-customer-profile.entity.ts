import { OmitType } from '@nestjs/swagger';
import { CustomerProfileEntity } from './customer-profile.entity';
import { Exclude } from 'class-transformer';

export class SearchCustomerProfileEntity extends OmitType(
  CustomerProfileEntity,
  ['userId', 'username', 'password'],
) {
  @Exclude()
  userId: string;

  @Exclude()
  username: string;

  @Exclude()
  password: string;

  constructor(data: SearchCustomerProfileEntity) {
    super(data);
    Object.assign(this, data);
  }
}
