import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { cargo } from './database/models/cargo';
import { pessoa_fisica } from './database/models/pessoa_fisica';
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

  public async deleteCargos(pk: string) {
    await this.databaseService.executeQuery('DELETE FROM cargo WHERE nome = $1 AND abrangencia = $2', [pk[0], pk[1]]);
  }

  public async getAllPessoas(): Promise<pessoa_fisica[]> {
    const pessoasResults = await this.databaseService.executeQuery('SELECT * FROM pessoa_fisica');

    return this.transformerService.queryResultToObject<pessoa_fisica>(pessoasResults);
  }
}
