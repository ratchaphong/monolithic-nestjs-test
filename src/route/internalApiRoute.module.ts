import { Module } from '@nestjs/common';
import { MasterDataController } from '../master-data/master-data.controller';
import { VehicleRegistrationTypesModule } from '../vehicle-registration-types/vehicle-registration-types.module';
import { VerifyCardsModule } from '../verify-cards/verify-cards.module';

@Module({
  imports: [VerifyCardsModule, VehicleRegistrationTypesModule],
  controllers: [MasterDataController],
})
export class InternalApiRouteModule {}
