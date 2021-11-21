import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async index(): Promise<any> {
    return {
      message: 'est est est, isso é um test',
    };
  }

  @Get('cargos')
  @Render('cargos')
  async cargos(): Promise<any> {
    const cargos = await this.appService.getAllCargos();
    return {
      cargos,
      teste: 'ellian',
    };
  }
}
