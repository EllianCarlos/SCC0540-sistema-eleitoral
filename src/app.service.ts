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
import { ficha_limpa } from './database/models/ficha_limpa';
import { relatorio } from './database/models/relatorio';
import { TransformerService } from './transformer/transformer.service';

@Injectable()
export class AppService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly transformerService: TransformerService,
  ) {}

  async getFichaLimpa() {
    const ficha_limpa_result = await this.databaseService.executeQuery(`SELECT p.cpf, p.nome, p.data_nasc
      FROM pessoa_fisica p
      LEFT OUTER JOIN 
        (SELECT *
        FROM processo_judicial
        WHERE (extract(year from current_date) < (extract(year from data_termino) + 5)) AND (procedente = true)) ficha_suja
      ON p.cpf = ficha_suja.cpf
      WHERE ficha_suja.cpf IS NULL AND p.funcao = 'Candidato'
      ORDER BY p.nome`);
    console.log(ficha_limpa_result);

    return this.transformerService.queryResultToObject<ficha_limpa>(ficha_limpa_result);
  }

  public async generateRelatorio(
    cargo_c: string,
    abrangencia: string,
    ano: string,
    pais: string,
    estado: string,
    municipio: string | null,
  ): Promise<relatorio[]> {
    if (cargo_c && pais && abrangencia && ano) {
      let q = `
        SELECT 
          C.CANDIDATO, PFC.NOME, PFC.DATA_NASC, PFC.FUNCAO AS "funcao_atual", 
          C.VICE_CPF AS "vice_cpf", PF.NOME AS "vice_nome", PF.DATA_NASC AS "vice_data_nasc", PF.FUNCAO AS "vice_funcao",
          C.ANO_CANDIDATURA, C.CARGO, C.ABRANGENCIA, C.MUNICIPIO, 
          C.PARTIDO AS "partido_do_candidato", P.SIGLA AS "partido_do_candidato_sigla", P.PROGRAMA  AS "partido_do_candidato_programa", P.PRESIDENTE AS "partido_do_candidato_presidente",
          C.VICE_PARTIDO AS "partido_do_vice", P2.SIGLA AS "partido_do_vice_sigla", P2.PROGRAMA  AS "partido_do_vice_programa", P2.PRESIDENTE AS "partido_do_vice_presidente",
          C.PLEITO, P3."data" AS "data_do_pleito", C.NUM_VOTOS,
          C.MUNICIPIO, C.ESTADO, C.PAIS
        FROM CANDIDATURA C 
          JOIN PESSOA_FISICA PFC ON CANDIDATO = PFC.CPF 
          LEFT JOIN PESSOA_FISICA PF ON VICE_CPF = PF.CPF 
          LEFT JOIN PARTIDO P  ON PARTIDO = P.NOME 
          LEFT JOIN PARTIDO P2 ON VICE_PARTIDO = P2.NOME 
          LEFT JOIN PLEITO P3 ON P3.ID = C.PLEITO
        WHERE C.PAIS = $4 AND C.ABRANGENCIA = $2 AND C.ANO_CANDIDATURA = $3 AND C.CARGO = $1
      `;
      const values = [cargo_c, abrangencia, ano, pais];
      if (estado) {
        q += `AND C.ESTADO = $5`;
        values.push(estado);
      }
      if (municipio) {
        q += `AND C.MUNICIPIO = $6`;
        values.push(municipio);
      }
      q += `ORDER BY C.NUM_VOTOS DESC;`;
      const result = await this.databaseService.executeQuery(q, values);
      return this.transformerService.queryResultToObject<relatorio>(result);
    } else {
      throw new Error('Preciso de paramêtros!');
    }
  }

  public async orderByParam(orderBy: string): Promise<candidatura[]> {
    let q = `
        SELECT 
          *
        FROM CANDIDATURA C
      `;
    if (orderBy === 'Nome') {
      q += `ORDER BY C.CANDIDATO;`;
    }
    if (orderBy === 'Ano') {
      q += `ORDER BY C.ANO_CANDIDATURA;`;
    }
    if (orderBy === 'Cargo') {
      q += `ORDER BY C.CARGO, C.ABRANGENCIA;`;
    }
    const result = await this.databaseService.executeQuery(q);
    return this.transformerService.queryResultToObject<candidatura>(result);
  }

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
