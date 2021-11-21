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
}
