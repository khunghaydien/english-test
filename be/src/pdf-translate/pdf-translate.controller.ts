import { Controller, Get, Res } from '@nestjs/common';
import { PdfParserService } from './pdf-translate.service';

@Controller('pdf-translate')
export class PdfParserController {
    constructor(private readonly PdfTranslate: PdfParserService) { }

    @Get()
    async getTranslatedText(@Res() res) {
        const filePath = 'pdfs/ielts-mock-test-2020-april_reading-practice-test-1-v9-2599624.pdf';
        const plainText = await this.PdfTranslate.PdfParserService(filePath);
        return res.json({ data: plainText });
    }
}
