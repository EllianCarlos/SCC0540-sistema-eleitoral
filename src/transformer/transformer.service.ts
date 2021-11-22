import { Injectable } from '@nestjs/common';
import { QueryResult } from 'pg';

@Injectable()
export class TransformerService {
  queryResultToObject<T>(queryResult: QueryResult<any>): T[] {
    const objects: T[] = queryResult.rows.map((row: any) => {
      const object: T = Object.assign({}, row); // ignora deep clone
      return object;
    });
    return objects;
  }
}
