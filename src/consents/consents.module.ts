import { Module } from '@nestjs/common';
import { ConsentsService } from './consents.service';
import { ActionHistoryModule } from '../action-history/action-history.module';

@Module({
  imports: [
    ActionHistoryModule,
    // BullModule.registerQueue({
    //   name: 'master-data-consent',
    // }),
  ],
  providers: [ConsentsService],
  exports: [ConsentsService],
})
export class ConsentsModule {}
