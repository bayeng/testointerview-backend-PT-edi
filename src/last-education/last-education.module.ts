import { Module } from '@nestjs/common';
import { LastEducationService } from './last-education.service';
import { LastEducationController } from './last-education.controller';

@Module({
  controllers: [LastEducationController],
  providers: [LastEducationService],
})
export class LastEducationModule {}
