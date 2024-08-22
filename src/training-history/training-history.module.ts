import { Module } from '@nestjs/common';
import { TrainingHistoryService } from './training-history.service';
import { TrainingHistoryController } from './training-history.controller';

@Module({
  controllers: [TrainingHistoryController],
  providers: [TrainingHistoryService],
})
export class TrainingHistoryModule {}
