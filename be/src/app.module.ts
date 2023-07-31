import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfTranslateModule } from './pdf-translate/pdf-translate.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PdfTranslateModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'pdfs'),
      serveRoot: '/pdfs',
    }),
    AuthModule,],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }
