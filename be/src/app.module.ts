import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfTranslateModule } from './pdf-translate/pdf-translate.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [PdfTranslateModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'pdfs'), // The path to the directory containing PDF files
      serveRoot: '/pdfs', // The base URL path to serve the PDF files
    }),],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }
