import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VehicleRegistrationTypesService } from './vehicle-registration-types.service';
import { CreateVehicleRegistrationTypeDto } from './dto/create-vehicle-registration-type.dto';
import { UpdateVehicleRegistrationTypeDto } from './dto/update-vehicle-registration-type.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiOkRes } from '../decorators/api-ok.decorator';
import { OptionResponseEntity } from '../verify-cards/entities/option-response.entity';
import { VehicleRegistrationType } from '@prisma/client';
import { OptionEntity } from '../verify-cards/entities/options.entity';
import { Public } from '../guards/jwt-auth.guard.utils';

@Controller({ version: '1', path: 'vehicle_registration_types' })
@ApiTags('Options')
@Public()
export class VehicleRegistrationTypesController {
  constructor(
    private readonly vehicleRegistrationTypesService: VehicleRegistrationTypesService,
  ) {}

  @Get('options')
  // @LanguageApiHeader()
  @ApiOkRes(OptionResponseEntity)
  async options(): Promise<OptionResponseEntity> {
    const vehicleRegistrationTypes: Array<VehicleRegistrationType> =
      await this.vehicleRegistrationTypesService.findAllEffective();

    return {
      options: vehicleRegistrationTypes.map(
        (vehRegis: VehicleRegistrationType) => new OptionEntity(vehRegis),
      ),
    };
  }
}
