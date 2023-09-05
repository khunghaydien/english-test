import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfTranslateModule } from './pdf-translate/pdf-translate.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PdfTranslateModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'pdfs'),
      serveRoot: '/pdfs',
    }),
    UserModule,
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "postgres",
      "password": "09022000",
      "database": "english",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
