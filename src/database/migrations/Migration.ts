import { DatabaseService } from '../database.service';

export interface Migration {
  MigrationName: string;
  up(databaseService: DatabaseService): Promise<void>;
  down(databaseService: DatabaseService): Promise<void>;
}
