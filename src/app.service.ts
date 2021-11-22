import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import {
  apoiador,
  candidatura,
  cargo,
  doacao_pf,
  doacao_pj,
  equipe,
  partido,
  pessoa_fisica,
  pleito,
  processo_judicial,
  programa_partido,
} from './database/models';
import { TransformerService } from './transformer/transformer.service';

@Injectable()
export class AppService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly transformerService: TransformerService,
  ) {}

  public async getAllCargos(): Promise<cargo[]> {
    console.log('SELECT * FROM cargo');
    const cargosResults = await this.databaseService.executeQuery('SELECT * FROM cargo');

    return this.transformerService.queryResultToObject<cargo>(cargosResults);
  }

  public async deleteCargos(pk: string) {
    await this.databaseService.executeQuery('DELETE FROM cargo WHERE nome = $1 AND abrangencia = $2', [pk[0], pk[1]]);
  }

  public async getAllPessoas(): Promise<pessoa_fisica[]> {
    console.log('SELECT * FROM pessoa_fisica');
    const pessoasResults = await this.databaseService.executeQuery('SELECT * FROM pessoa_fisica');

    return this.transformerService.queryResultToObject<pessoa_fisica>(pessoasResults);
  }

  public async getAllPleitos(): Promise<pleito[]> {
    console.log('SELECT * FROM pleito');
    const pleitosResults = await this.databaseService.executeQuery('SELECT * FROM pleito');

    return this.transformerService.queryResultToObject<pleito>(pleitosResults);
  }

  public async getAllProgramas(): Promise<programa_partido[]> {
    console.log('SELECT * FROM programa_partido');
    const programasResults = await this.databaseService.executeQuery('SELECT * FROM programa_partido');

    return this.transformerService.queryResultToObject<programa_partido>(programasResults);
  }

  public async getAllPartidos(): Promise<partido[]> {
    console.log('SELECT * FROM partido');
    const partidosResults = await this.databaseService.executeQuery('SELECT * FROM partido');

    return this.transformerService.queryResultToObject<partido>(partidosResults);
  }

  public async getAllProcessos(): Promise<processo_judicial[]> {
    console.log('SELECT * FROM processo_judicial');
    const processosResults = await this.databaseService.executeQuery('SELECT * FROM processo_judicial');

    return this.transformerService.queryResultToObject<processo_judicial>(processosResults);
  }

  public async getAllCandidaturas(): Promise<candidatura[]> {
    console.log('SELECT * FROM candidatura');
    const candidaturasResults = await this.databaseService.executeQuery('SELECT * FROM candidatura');

    return this.transformerService.queryResultToObject<candidatura>(candidaturasResults);
  }

  public async getAllDoacoesPf(): Promise<doacao_pf[]> {
    console.log('SELECT * FROM doacao_pf');
    const doacoesPfResults = await this.databaseService.executeQuery('SELECT * FROM doacao_pf');

    return this.transformerService.queryResultToObject<doacao_pf>(doacoesPfResults);
  }

  public async getAllDoacoesPj(): Promise<doacao_pj[]> {
    console.log('SELECT * FROM doacao_pj');
    const doacoesPjResults = await this.databaseService.executeQuery('SELECT * FROM doacao_pj');

    return this.transformerService.queryResultToObject<doacao_pj>(doacoesPjResults);
  }

  public async getAllEquipes(): Promise<equipe[]> {
    console.log('SELECT * FROM equipe');
    const equipesResults = await this.databaseService.executeQuery('SELECT * FROM equipe');

    return this.transformerService.queryResultToObject<equipe>(equipesResults);
  }

  public async getAllApoiadores(): Promise<apoiador[]> {
    console.log('SELECT * FROM apoiador');
    const apoiadoresResults = await this.databaseService.executeQuery('SELECT * FROM apoiador');

    return this.transformerService.queryResultToObject<apoiador>(apoiadoresResults);
  }
}
