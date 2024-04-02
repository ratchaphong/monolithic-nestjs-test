import { Test, TestingModule } from '@nestjs/testing';
import { VehicleRegistrationTypesService } from './vehicle-registration-types.service';

describe('VehicleRegistrationTypesService', () => {
  let service: VehicleRegistrationTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleRegistrationTypesService],
    }).compile();

    service = module.get<VehicleRegistrationTypesService>(VehicleRegistrationTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
