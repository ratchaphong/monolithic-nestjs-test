import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { VehicleRegistrationTypesEntity } from './vehicle-registration-types.entity';
import { VerifyCardsEntity } from './verify-cards.entity';

export class MasterDataResponseEntity {
  constructor(partial: Partial<MasterDataResponseEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    description: 'VehicleRegistrationType detail',
    type: VehicleRegistrationTypesEntity,
  })
  @Type(() => VehicleRegistrationTypesEntity)
  vehicleRegistrationType: VehicleRegistrationTypesEntity;

  @ApiProperty({ description: 'VerifyCard detail', type: VerifyCardsEntity })
  @Type(() => VerifyCardsEntity)
  verifyCard: VerifyCardsEntity;
}
