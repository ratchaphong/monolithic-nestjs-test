import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VehicleRegistrationType, VerifyCard } from '@prisma/client';
import { ApiOkRes } from '../decorators/api-ok.decorator';
import { VehicleRegistrationTypesService } from '../vehicle-registration-types/vehicle-registration-types.service';
import { VerifyCardsService } from '../verify-cards/verify-cards.service';
import { MasterDataResponseEntity } from './entities/master-data-response.entity';
import { MasterDataDto } from './dto/master-data.dto';

@Controller({ path: 'master_data' })
@ApiTags('Internal')
export class MasterDataController {
  constructor(
    private readonly verifyCardsService: VerifyCardsService,
    private readonly vehicleRegistrationTypesService: VehicleRegistrationTypesService,
  ) {}

  @Get('find_all')
  @ApiOkRes(MasterDataResponseEntity, { description: 'Master Data response' })
  async findAllWithCode(
    @Query() query: MasterDataDto,
  ): Promise<MasterDataResponseEntity> {
    const verifyCard: VerifyCard = await this.verifyCardsService.findByCode(
      query.verifyCardCode,
    );
    const vehicleRegistrationType: VehicleRegistrationType =
      await this.vehicleRegistrationTypesService.findByCode(
        query.vehicleRegistrationTypeCode,
      );

    const masterDataResponse: MasterDataResponseEntity =
      new MasterDataResponseEntity({
        verifyCard: verifyCard,
        vehicleRegistrationType: vehicleRegistrationType,
      });

    return masterDataResponse;
  }
}
