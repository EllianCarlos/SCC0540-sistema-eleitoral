import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}

  async initializeApp(): Promise<void> {
    await this.databaseService.connect();
  }
}
