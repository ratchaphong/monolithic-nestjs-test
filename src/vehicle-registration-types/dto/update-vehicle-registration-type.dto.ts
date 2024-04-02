import { PartialType } from '@nestjs/swagger';
import { CreateVehicleRegistrationTypeDto } from './create-vehicle-registration-type.dto';

export class UpdateVehicleRegistrationTypeDto extends PartialType(CreateVehicleRegistrationTypeDto) {}
