import { DatabaseService } from '../database.service';

export class InitialMigration {
  constructor(readonly databaseService: DatabaseService) {}

  async up(): Promise<any> {
    const pool = this.databaseService.getPool();
  }
}
