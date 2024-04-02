import { Module } from '@nestjs/common';
import { VehicleRegistrationTypesController } from '../vehicle-registration-types/vehicle-registration-types.controller';
import { VehicleRegistrationTypesModule } from '../vehicle-registration-types/vehicle-registration-types.module';
import { VerifyCardsController } from '../verify-cards/verify-cards.controller';
import { VerifyCardsModule } from '../verify-cards/verify-cards.module';
import { ConsentsModule } from '../consents/consents.module';
import { ConsentsController } from '../consents/consents.controller';
import { CustomerModule } from '../customer/customer.module';
import { CustomerController } from '../customer/customer.controller';

@Module({
  imports: [
    VerifyCardsModule,
    VehicleRegistrationTypesModule,
    ConsentsModule,
    CustomerModule,
  ],
  controllers: [
    VerifyCardsController,
    VehicleRegistrationTypesController,
    ConsentsController,
    CustomerController,
  ],
})
export class ApiV1RouteModule {}
