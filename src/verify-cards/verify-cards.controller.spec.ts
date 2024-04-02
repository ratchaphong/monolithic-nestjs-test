import { Test, TestingModule } from '@nestjs/testing';
import { VerifyCardsController } from './verify-cards.controller';
import { VerifyCardsService } from './verify-cards.service';

describe('VerifyCardsController', () => {
  let controller: VerifyCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VerifyCardsController],
      providers: [VerifyCardsService],
    }).compile();

    controller = module.get<VerifyCardsController>(VerifyCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
