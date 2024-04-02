import { Module } from '@nestjs/common';
import { VehicleRegistrationTypesService } from './vehicle-registration-types.service';
import { VehicleRegistrationTypesController } from './vehicle-registration-types.controller';
import { PrismaModule } from '../prisma/prisma.module';

// @Module({
//   // imports: [PrismaModule],
//   controllers: [VehicleRegistrationTypesController],
//   providers: [VehicleRegistrationTypesService],
// })
@Module({
  providers: [VehicleRegistrationTypesService],
  exports: [VehicleRegistrationTypesService],
})
export class VehicleRegistrationTypesModule {}
