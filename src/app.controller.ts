import { Body, Controller, Delete, Get, Redirect, Render } from '@nestjs/common';
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
      table: 'cargo',
    };
  }

  @Get('pessoas')
  @Render('pessoas')
  async pessoas(): Promise<any> {
    const pessoas = await this.appService.getAllPessoas();
    return {
      pessoas,
      table: 'pessoa_fisica',
    };
  }

  @Delete('cargo')
  async deleteCargos(@Body() body: any): Promise<any> {
    await this.appService.deleteCargos(body.pk);
  }
}
