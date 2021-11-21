import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}

  public async getAllCargos(): Promise<any> {
    const cargosResults = await this.databaseService.executeQuery('SELECT * FROM cargo');

    // .. tranformar cargoResults to CargoClass
    const cargoClass = cargosResults.rows;
    Logger.log(JSON.stringify(cargoClass));
    return cargoClass;
  }

  public async getAllPessoas(): Promise<any> {
    const pessoasResults = await this.databaseService.executeQuery('SELECT * FROM pessoa_fisica');

    // .. tranformar cargoResults to CargoClass
    const pessoasClass = pessoasResults.rows;
    Logger.log(JSON.stringify(pessoasClass));
    return pessoasClass;
  }
}
