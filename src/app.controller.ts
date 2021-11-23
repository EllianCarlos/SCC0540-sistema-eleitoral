import { Body, Controller, Delete, Get, Query, Render } from '@nestjs/common';
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

  @Get('relatorio')
  @Render('relatorio')
  async relatorio(
    @Query('cargo') cargo_c: string,
    @Query('abrangencia') abrangencia: string,
    @Query('ano') ano: string,
    @Query('pais') pais: string,
    @Query('estado') estado: string = null,
    @Query('municipio') municipio: string = null,
  ): Promise<any> {
    const candidaturas = await this.appService.generateRelatorio(cargo_c, abrangencia, ano, pais, estado, municipio);
    return {
      candidaturas,
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

  @Get('pleitos')
  @Render('pleitos')
  async pleitos(): Promise<any> {
    const pleitos = await this.appService.getAllPleitos();
    return {
      pleitos,
      table: 'pleito',
    };
  }

  @Get('programas')
  @Render('programas')
  async programas(): Promise<any> {
    const programas = await this.appService.getAllProgramas();
    return {
      programas,
      table: 'programa_partido',
    };
  }

  @Get('partidos')
  @Render('partidos')
  async partidos(): Promise<any> {
    const partidos = await this.appService.getAllPartidos();
    return {
      partidos,
      table: 'partido',
    };
  }

  @Get('processos')
  @Render('processos')
  async processos(): Promise<any> {
    const processos = await this.appService.getAllProcessos();
    return {
      processos,
      table: 'processo_judicial',
    };
  }

  @Get('candidaturas')
  @Render('candidaturas')
  async candidaturas(): Promise<any> {
    const candidaturas = await this.appService.getAllCandidaturas();
    return {
      candidaturas,
      table: 'candidatura',
    };
  }

  @Get('doacoesPf')
  @Render('doacoesPf')
  async doacoesPf(): Promise<any> {
    const doacoesPf = await this.appService.getAllDoacoesPf();
    return {
      doacoesPf,
      table: 'doacao_pf',
    };
  }

  @Get('doacoesPj')
  @Render('doacoesPj')
  async doacoesPj(): Promise<any> {
    const doacoesPj = await this.appService.getAllDoacoesPj();
    return {
      doacoesPj,
      table: 'doacao_pj',
    };
  }

  @Get('equipes')
  @Render('equipes')
  async equipes(): Promise<any> {
    const equipes = await this.appService.getAllEquipes();
    return {
      equipes,
      table: 'equipe',
    };
  }

  @Get('apoiadores')
  @Render('apoiadores')
  async apoiadores(): Promise<any> {
    const apoiadores = await this.appService.getAllApoiadores();
    return {
      apoiadores,
      table: 'apoiador',
    };
  }

  @Delete('cargo')
  async deleteCargos(@Body() body: any): Promise<any> {
    await this.appService.deleteCargos(body.pk);
  }

  @Delete('pessoa_fisica')
  async deletePessoas(@Body() body: any): Promise<any> {
    await this.appService.deletePessoas(body.pk);
  }

  @Delete('pleito')
  async deletePleitos(@Body() body: any): Promise<any> {
    await this.appService.deletePleitos(body.pk);
  }

  @Delete('programa_partido')
  async deleteProgramas(@Body() body: any): Promise<any> {
    await this.appService.deleteProgramas(body.pk);
  }

  @Delete('partido')
  async deletePartidos(@Body() body: any): Promise<any> {
    await this.appService.deletePartidos(body.pk);
  }

  @Delete('processo_judicial')
  async deleteProcessos(@Body() body: any): Promise<any> {
    await this.appService.deleteProcessos(body.pk);
  }

  @Delete('candidatura')
  async deleteCandidaturas(@Body() body: any): Promise<any> {
    await this.appService.deleteCandidaturas(body.pk);
  }

  @Delete('doacao_pf')
  async deleteDoacoesPf(@Body() body: any): Promise<any> {
    await this.appService.deleteDoacoesPf(body.pk);
  }

  @Delete('doacao_pj')
  async deleteDoacoesPj(@Body() body: any): Promise<any> {
    await this.appService.deleteDoacoesPj(body.pk);
  }

  @Delete('equipe')
  async deleteEquipes(@Body() body: any): Promise<any> {
    await this.appService.deleteEquipes(body.pk);
  }

  @Delete('apoiador')
  async deleteApoiadores(@Body() body: any): Promise<any> {
    await this.appService.deleteApoiadores(body.pk);
  }
}
