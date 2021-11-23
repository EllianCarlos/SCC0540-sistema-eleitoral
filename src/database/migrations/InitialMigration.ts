import { DatabaseService } from '../database.service';
import { Migration } from './Migration';

export class InitialMigration implements Migration {
  MigrationName = 'InitialMigration00';

  async up(databaseService: DatabaseService): Promise<void> {
    await databaseService.executeQuery(`
      CREATE TABLE cargo(
        nome VARCHAR(50) NOT NULL,
        abrangencia VARCHAR(20) NOT NULL,
        
        CONSTRAINT cargo_pk PRIMARY KEY(nome, abrangencia),
        CONSTRAINT cargo_ck CHECK(abrangencia IN ('Municipal', 'Estadual', 'Federal'))
      );

      CREATE TABLE pessoa_fisica(
        cpf VARCHAR(11) NOT NULL,
        nome VARCHAR(50) NOT NULL,
        data_nasc DATE NOT NULL,
        funcao VARCHAR(10) NOT NULL,
        
        CONSTRAINT pfisica_pk PRIMARY KEY(cpf),
        CONSTRAINT pfisica_ck CHECK(funcao IN ('Candidato', 'Doador', 'Apoiador'))
      );

      CREATE TABLE pleito(
        id NUMERIC(10) NOT NULL,
        data DATE NOT NULL,
        
        CONSTRAINT pleito_pk PRIMARY KEY(id),
        CONSTRAINT pleito_ck CHECK(id > 0)
      );

      CREATE TABLE programa_partido(
        id NUMERIC(10) NOT NULL,
        titulo VARCHAR(50) NOT NULL,
        autor VARCHAR(50) NOT NULL,
        data_criacao DATE NOT NULL,
        descricao VARCHAR(300) NOT NULL,
        
        CONSTRAINT progpartido_pk PRIMARY KEY(id),
        CONSTRAINT progpartido_ck CHECK(id > 0)
      );

      CREATE TABLE partido(
        nome VARCHAR(50) NOT NULL,
        sigla VARCHAR(20) NOT NULL,
        programa NUMERIC(10) NOT NULL,
        presidente VARCHAR(50) NOT NULL,
        
        CONSTRAINT partido_pk PRIMARY KEY(nome, sigla),
        CONSTRAINT partido_fk FOREIGN KEY(programa) REFERENCES programa_partido(id) ON DELETE CASCADE,
        CONSTRAINT partido_ck CHECK(programa > 0)
      );

      CREATE TABLE processo_judicial(
        id NUMERIC(10) NOT NULL,
        cpf VARCHAR(11) NOT NULL,
        data_termino DATE,
        procedente BOOLEAN NOT NULL,
        
        CONSTRAINT processo_pk PRIMARY KEY(id),
        CONSTRAINT processo_fk FOREIGN KEY(cpf) REFERENCES pessoa_fisica(cpf) ON DELETE CASCADE,
        CONSTRAINT processo_ck CHECK(id > 0)
      );

      CREATE TABLE candidatura(
        candidato VARCHAR(11) NOT NULL,
        ano_candidatura NUMERIC(10) NOT NULL,
        partido VARCHAR(50) NOT NULL,
        partido_sigla VARCHAR(20) NOT NULL,
        vice_cpf VARCHAR(11),
        vice_partido VARCHAR(50),
        vice_partido_sigla VARCHAR(20),
        cargo VARCHAR(50) NOT NULL,
        abrangencia VARCHAR(20) NOT NULL,
        pleito NUMERIC(10) NOT NULL,
        num_votos NUMERIC(10) DEFAULT 0 NOT NULL,
        municipio VARCHAR(50),
        estado VARCHAR(50),
        pais VARCHAR(50) NOT NULL,
        
        CONSTRAINT candidatura_pk PRIMARY KEY(candidato, ano_candidatura),
        CONSTRAINT candidatura_ck1 CHECK(ano_candidatura > 1988), -- a partir da redemocratização
        CONSTRAINT candidatura_ck2 CHECK(pleito > 0),
        CONSTRAINT candidatura_ck3 CHECK(num_votos >= 0),
        CONSTRAINT candidatura_fk1 FOREIGN KEY(candidato) REFERENCES pessoa_fisica(cpf) ON DELETE CASCADE,
        CONSTRAINT candidatura_fk2 FOREIGN KEY(partido, partido_sigla) REFERENCES partido(nome, sigla) ON DELETE CASCADE,
        CONSTRAINT candidatura_fk3 FOREIGN KEY(vice_cpf) REFERENCES pessoa_fisica(cpf) ON DELETE CASCADE,
        CONSTRAINT candidatura_fk4 FOREIGN KEY(vice_partido, vice_partido_sigla) REFERENCES partido(nome, sigla) ON DELETE CASCADE,
        CONSTRAINT candidatura_fk5 FOREIGN KEY(cargo, abrangencia) REFERENCES cargo(nome, abrangencia) ON DELETE CASCADE,
        CONSTRAINT candidatura_fk6 FOREIGN KEY(pleito) REFERENCES pleito(id) ON DELETE CASCADE
      );

      CREATE TABLE doacao_pj( -- Doações Pessoas Jurídicas
        cnpj_doador VARCHAR(11) NOT NULL,
        candidato VARCHAR(11) NOT NULL,
        ano_candidatura NUMERIC(10) NOT NULL,
        nome VARCHAR(50) NOT NULL,
        valor NUMERIC(6,2) DEFAULT 0 NOT NULL,
        data_doacao TIMESTAMP NOT NULL,
        
        CONSTRAINT doacaopj_pk PRIMARY KEY(cnpj_doador, candidato, ano_candidatura),
        CONSTRAINT doacaopj_ck1 CHECK(ano_candidatura > 1988),
        CONSTRAINT doacaopj_ck2 CHECK(valor >= 0),
        CONSTRAINT doacaopj_fk FOREIGN KEY(candidato, ano_candidatura) REFERENCES candidatura(candidato, ano_candidatura) ON DELETE CASCADE
      );

      CREATE TABLE doacao_pf( -- Doações Pessoas Físicas
        doador VARCHAR(11) NOT NULL,
        candidato VARCHAR(11) NOT NULL,
        ano_candidatura NUMERIC(10) NOT NULL,
        data_hora_doacao TIMESTAMP NOT NULL,
        valor NUMERIC(6,2) DEFAULT 0 NOT NULL,
        
        CONSTRAINT doacaopf_pk PRIMARY KEY(doador, candidato, ano_candidatura, data_hora_doacao),
        CONSTRAINT doacaopf_ck1 CHECK(ano_candidatura > 1988),
        CONSTRAINT doacaopf_ck2 CHECK(valor >= 0),
        CONSTRAINT doacaopf_fk1 FOREIGN KEY(doador) REFERENCES pessoa_fisica(cpf) ON DELETE CASCADE,
        CONSTRAINT doacaopf_fk2 FOREIGN KEY(candidato, ano_candidatura) REFERENCES candidatura(candidato, ano_candidatura) ON DELETE CASCADE
      );

      CREATE TABLE equipe(
        candidato VARCHAR(11) NOT NULL,
        ano_candidatura NUMERIC(10) NOT NULL,
        id_equipe NUMERIC(6) NOT NULL,
        nome_equipe VARCHAR(50) NOT NULL,
        num_apoiadores NUMERIC(5) NOT NULL,
        
        CONSTRAINT equipe_pk PRIMARY KEY(candidato, ano_candidatura),
        CONSTRAINT equipe_un UNIQUE(id_equipe),
        CONSTRAINT equipe_ck1 CHECK(ano_candidatura > 1988),
        CONSTRAINT equipe_ck2 CHECK(id_equipe > 0),
        CONSTRAINT equipe_ck3 CHECK(num_apoiadores >= 0),
        CONSTRAINT equipe_fk1 FOREIGN KEY(candidato, ano_candidatura) REFERENCES candidatura(candidato, ano_candidatura) ON DELETE CASCADE
      );

      CREATE TABLE apoiador(
        cpf VARCHAR(11) NOT NULL,
        candidato VARCHAR(11) NOT NULL,
        ano_candidatura NUMERIC(10) NOT NULL,
        id_equipe NUMERIC(6) NOT NULL,
        
        CONSTRAINT apoiador_pk PRIMARY KEY(cpf, ano_candidatura),
        CONSTRAINT apoiador_ck1 CHECK(ano_candidatura > 1988),
        CONSTRAINT apoiador_ck2 CHECK(id_equipe > 0),
        CONSTRAINT apoiador_fk1 FOREIGN KEY(cpf) REFERENCES pessoa_fisica(cpf) ON DELETE CASCADE,
        CONSTRAINT apoiador_fk2 FOREIGN KEY(candidato, ano_candidatura) REFERENCES equipe(candidato, ano_candidatura) ON DELETE CASCADE,
        CONSTRAINT apoiador_fk3 FOREIGN KEY(id_equipe) REFERENCES equipe(id_equipe) ON DELETE CASCADE
      );
    `);
  }

  async down(databaseService: DatabaseService): Promise<void> {
    await databaseService.executeQuery(`
      DROP TABLE cargo CASCADE;
      DROP TABLE pessoa_fisica CASCADE;
      DROP TABLE pleito CASCADE;
      DROP TABLE programa_partido CASCADE;
      DROP TABLE partido CASCADE;
      DROP TABLE processo_judicial CASCADE;
      DROP TABLE candidatura CASCADE;
      DROP TABLE doacao_pj CASCADE;
      DROP TABLE doacao_pf CASCADE;
      DROP TABLE equipe CASCADE;
      DROP TABLE apoiador CASCADE;  
  `);
  }
}
