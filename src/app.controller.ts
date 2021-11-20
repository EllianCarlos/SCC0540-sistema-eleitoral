import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async index(): Promise<any> {
    this.appService.initializeApp();
    return { message: 'est est est, isso é um test' };
  }
}
