import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool, PoolClient, PoolConfig } from 'pg';

@Injectable()
export class DatabaseService {
  private pool: Pool;
  private poolClients: PoolClient[];

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
}
