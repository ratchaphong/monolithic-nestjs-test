import { Test, TestingModule } from '@nestjs/testing';
import { VehicleRegistrationTypesController } from './vehicle-registration-types.controller';
import { VehicleRegistrationTypesService } from './vehicle-registration-types.service';

describe('VehicleRegistrationTypesController', () => {
  let controller: VehicleRegistrationTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleRegistrationTypesController],
      providers: [VehicleRegistrationTypesService],
    }).compile();

    controller = module.get<VehicleRegistrationTypesController>(VehicleRegistrationTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
