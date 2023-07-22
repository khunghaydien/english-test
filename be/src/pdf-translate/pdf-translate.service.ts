import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as pdfjs from 'pdfjs-dist';

@Injectable()
export class PdfParserService {
  async PdfParserService(filePath: string): Promise<string> {
    const pdfData = new Uint8Array(fs.readFileSync(filePath));

    const pdf = await pdfjs.getDocument({
      data: pdfData,
    }).promise;

    let text = '';

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const pageText = await page.getTextContent();
      for (const item of pageText.items) {
        if ('str' in item) {
          text += item.str + '\n';
        }
      }
    }
    return text;
  }
}