import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
    credentials: false,
  });
  app.useStaticAssets(join(__dirname, '..', '/public'));
  app.setBaseViewsDir(join(__dirname, '..', '/views'));
  hbs.registerHelper('concat', function (...args) {
    return args.filter((v) => typeof v != 'object').join('');
  });
  hbs.registerHelper('delete', function (tableName, ...args) {
    return `deleteThis('${tableName}', ${args.map((value) => {
      if (typeof value != 'object') {
        return "'" + value + "'";
      }
    })})`;
  });
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
