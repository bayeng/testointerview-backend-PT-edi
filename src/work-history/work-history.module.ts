import { Module } from '@nestjs/common';
import { WorkHistoryService } from './work-history.service';
import { WorkHistoryController } from './work-history.controller';

@Module({
  controllers: [WorkHistoryController],
  providers: [WorkHistoryService],
})
export class WorkHistoryModule {}
