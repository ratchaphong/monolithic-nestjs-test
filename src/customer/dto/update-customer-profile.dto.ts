import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateCustomerProfileDto } from './create-customer-profile.dto';

export class UpdateCustomerProfileDto extends PartialType(
  OmitType(CreateCustomerProfileDto, ['username', 'password']),
) {}
