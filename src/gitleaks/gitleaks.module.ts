import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { gitleakProviders } from './entities/gitleak.provider';
import { GitleaksController } from './gitleaks.controller';
import { GitleaksService } from './gitleaks.service';

@Module({
  imports: [DatabaseModule],
  controllers: [GitleaksController],
  providers: [...gitleakProviders, GitleaksService],
})
export class GitleaksModule {}
