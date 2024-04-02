import { Module } from '@nestjs/common';
import { VerifyCardsService } from './verify-cards.service';
import { VerifyCardsController } from './verify-cards.controller';
// import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaModule } from '../prisma/prisma.module';

// @Module({
//   // imports: [PrismaModule],
//   controllers: [VerifyCardsController],
//   providers: [VerifyCardsService],
// })
@Module({
  providers: [VerifyCardsService],
  exports: [VerifyCardsService],
})
export class VerifyCardsModule {}
// นอกจากนี้ยังมีการ export [VerifyCardsService] ด้วย ซึ่งหมายความว่า VerifyCardsService สามารถเข้าถึงได้จากโมดูลอื่นๆ ที่ import VerifyCardsModule
