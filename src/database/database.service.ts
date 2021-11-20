import { Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class DatabaseService {
  private client: Client;

  constructor() {
    this.client = new Client(); // This uses environment variables
  }

  async connect(): Promise<void> {
    await this.client.connect();
  }

  getClient(): Client {
    return this.client;
  }
}
