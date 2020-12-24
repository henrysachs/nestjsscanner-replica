import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const AWS_KEY = 'AKIAIOSFODNN7EXAMPLE';
    return this.appService.getHello();
  }
}
