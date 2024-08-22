import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BiodataModule } from './biodata/biodata.module';
import { LastEducationModule } from './last-education/last-education.module';
import { WorkHistoryModule } from './work-history/work-history.module';
import { TrainingHistoryModule } from './training-history/training-history.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    BiodataModule,
    LastEducationModule,
    WorkHistoryModule,
    TrainingHistoryModule,
    PrismaModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
