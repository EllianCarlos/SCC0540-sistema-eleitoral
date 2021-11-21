import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool, PoolClient, PoolConfig } from 'pg';
import { InitialMigration } from './migrations/InitialMigration';
import { Migration } from './migrations/Migration';

@Injectable()
export class DatabaseService {
  private pool: Pool;
  private poolClients: PoolClient[] = [];

  constructor(private readonly configService: ConfigService) {
    const clientOptions: PoolConfig = {
      host: this.configService.get('PGHOST'),
      user: this.configService.get('PGUSER'),
      password: this.configService.get('PGPASSWORD'),
      database: this.configService.get('PGDATABASE'),
      port: this.configService.get('PGPORT'),
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    };
    this.pool = new Pool(clientOptions);
    this.executeMigrations();
  }

  private async connect(): Promise<PoolClient> {
    const poolClient = await this.pool.connect();
    this.poolClients.push(poolClient);
    return poolClient;
  }

  public async executeQuery(query: string, values?: any[]): Promise<any> {
    const poolClient = await this.connect();
    const result = await poolClient.query(query, values);
    poolClient.release();
    return result;
  }

  public async releaseAll(): Promise<void> {
    await Promise.all(
      this.poolClients.map((poolClient: PoolClient) => poolClient.release()),
    );
  }

  private async executeMigrations(): Promise<void> {
    await this.pool.query(
      `CREATE TABLE IF NOT EXISTS Migrations (
        migration_name VARCHAR(127) NOT NULL,
        creation_date timestamp DEFAULT NOW() NOT NULL,
        CONSTRAINT migrationName_pk PRIMARY KEY(migration_name)
      );`,
    );
    const initialMigration = new InitialMigration();
    const migrations: Migration[] = [initialMigration];

    const result = await this.pool.query(
      'SELECT migration_name FROM migrations',
    );
    const migrationsNames = result.rows.map((row) => row.migration_name);

    await Promise.all(
      migrations.map(async (migration: Migration): Promise<any> => {
        if (!migrationsNames.includes(migration.MigrationName)) {
          return this.executeMigration(migration);
        }
      }),
    );
    Logger.log('All migrations were successfully executed');
  }

  private async executeMigration(migration: Migration): Promise<void> {
    await migration.up(this);
    await this.pool.query(
      `INSERT INTO Migrations (migration_name) VALUES ('${migration.MigrationName}');`,
    );
  }
}
