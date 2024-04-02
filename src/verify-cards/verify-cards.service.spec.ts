import { Test, TestingModule } from '@nestjs/testing';
import { VerifyCardsService } from './verify-cards.service';

describe('VerifyCardsService', () => {
  let service: VerifyCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerifyCardsService],
    }).compile();

    service = module.get<VerifyCardsService>(VerifyCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
