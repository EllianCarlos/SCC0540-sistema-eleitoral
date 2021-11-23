import { Injectable, Logger } from '@nestjs/common';
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
    const cargosResults = await this.databaseService.executeQuery('SELECT * FROM cargo');

    return this.transformerService.queryResultToObject<cargo>(cargosResults);
  }

  public async deleteCargos(pk: string[]) {
    await this.databaseService.executeQuery('DELETE FROM cargo WHERE nome = $1 AND abrangencia = $2', pk);
  }

  public async getAllPessoas(): Promise<pessoa_fisica[]> {
    const pessoasResults = await this.databaseService.executeQuery('SELECT * FROM pessoa_fisica');

    return this.transformerService.queryResultToObject<pessoa_fisica>(pessoasResults);
  }

  public async deletePessoas(pk: string[]) {
    await this.databaseService.executeQuery('DELETE FROM pessoa_fisica WHERE cpf = $1', pk);
  }

  public async getAllPleitos(): Promise<pleito[]> {
    const pleitosResults = await this.databaseService.executeQuery('SELECT * FROM pleito');

    return this.transformerService.queryResultToObject<pleito>(pleitosResults);
  }

  public async deletePleitos(pk: string[]) {
    await this.databaseService.executeQuery('DELETE FROM pleito WHERE id = $1', pk);
  }

  public async getAllProgramas(): Promise<programa_partido[]> {
    const programasResults = await this.databaseService.executeQuery('SELECT * FROM programa_partido');

    return this.transformerService.queryResultToObject<programa_partido>(programasResults);
  }

  public async deleteProgramas(pk: string[]) {
    await this.databaseService.executeQuery('DELETE FROM programa_partido WHERE id = $1', pk);
  }

  public async getAllPartidos(): Promise<partido[]> {
    const partidosResults = await this.databaseService.executeQuery('SELECT * FROM partido');

    return this.transformerService.queryResultToObject<partido>(partidosResults);
  }

  public async deletePartidos(pk: string[]) {
    await this.databaseService.executeQuery('DELETE FROM partido WHERE nome = $1 AND sigla = $2', pk);
  }

  public async getAllProcessos(): Promise<processo_judicial[]> {
    const processosResults = await this.databaseService.executeQuery('SELECT * FROM processo_judicial');

    return this.transformerService.queryResultToObject<processo_judicial>(processosResults);
  }

  public async deleteProcessos(pk: string[]) {
    await this.databaseService.executeQuery('DELETE FROM processo_judicial WHERE id = $1', pk);
  }

  public async getAllCandidaturas(): Promise<candidatura[]> {
    const candidaturasResults = await this.databaseService.executeQuery('SELECT * FROM candidatura');

    return this.transformerService.queryResultToObject<candidatura>(candidaturasResults);
  }

  public async deleteCandidaturas(pk: string[]) {
    await this.databaseService.executeQuery(
      'DELETE FROM candidatura WHERE candidato = $1 AND ano_candidatura = $2',
      pk,
    );
  }

  public async getAllDoacoesPf(): Promise<doacao_pf[]> {
    const doacoesPfResults = await this.databaseService.executeQuery('SELECT * FROM doacao_pf');

    return this.transformerService.queryResultToObject<doacao_pf>(doacoesPfResults);
  }

  public async deleteDoacoesPf(pk: string[]) {
    await this.databaseService.executeQuery(
      'DELETE FROM doacao_pf WHERE doador = $1 AND candidato = $2 AND ano_candidatura = $3 AND data_hora_doacao = $4',
      pk,
    );
  }

  public async getAllDoacoesPj(): Promise<doacao_pj[]> {
    const doacoesPjResults = await this.databaseService.executeQuery('SELECT * FROM doacao_pj');

    return this.transformerService.queryResultToObject<doacao_pj>(doacoesPjResults);
  }

  public async deleteDoacoesPj(pk: string[]) {
    await this.databaseService.executeQuery(
      'DELETE FROM doacao_pj WHERE cnpj_doador = $1 AND candidato = $2 AND ano_candidatura = $3',
      pk,
    );
  }

  public async getAllEquipes(): Promise<equipe[]> {
    const equipesResults = await this.databaseService.executeQuery('SELECT * FROM equipe');

    return this.transformerService.queryResultToObject<equipe>(equipesResults);
  }

  public async deleteEquipes(pk: string[]) {
    await this.databaseService.executeQuery('DELETE FROM equipe WHERE candidato = $1 AND ano_candidatura = $2', pk);
  }

  public async getAllApoiadores(): Promise<apoiador[]> {
    const apoiadoresResults = await this.databaseService.executeQuery('SELECT * FROM apoiador');

    return this.transformerService.queryResultToObject<apoiador>(apoiadoresResults);
  }

  public async deleteApoiadores(pk: string[]) {
    await this.databaseService.executeQuery('DELETE FROM apoiador WHERE cpf = $1 AND ano_candidatura = $2', pk);
  }
}
