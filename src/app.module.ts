import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SCMConsumer } from './scm-info';
import { DatabaseModule } from './database/database.module';
import { GitleaksModule } from './gitleaks/gitleaks.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'scan_scm',
      defaultJobOptions: { timeout: 10000, stackTraceLimit: 1000 },
      settings: { lockDuration: 10000, lockRenewTime: 10000 },
    }),
    SCMConsumer,
    DatabaseModule,
    GitleaksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
