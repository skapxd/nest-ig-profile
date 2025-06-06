import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getIgProfile(@Query('instagram') instagram: string) {
    return this.appService.getIgProfile(instagram);
  }
}
