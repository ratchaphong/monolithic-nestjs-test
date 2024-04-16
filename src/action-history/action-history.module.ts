import { Module } from '@nestjs/common';
import { ActionHistoryService } from './action-history.service';

@Module({
  providers: [ActionHistoryService],
  exports: [ActionHistoryService],
})
export class ActionHistoryModule {}
