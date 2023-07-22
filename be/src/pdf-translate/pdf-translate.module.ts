import { Module } from '@nestjs/common';
import { PdfParserService } from './pdf-translate.service';
import { PdfParserController } from './pdf-translate.controller';

@Module({
  controllers: [PdfParserController],
  providers: [PdfParserService]
})
export class PdfTranslateModule {}
