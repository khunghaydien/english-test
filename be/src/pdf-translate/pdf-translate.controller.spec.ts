import { Test, TestingModule } from '@nestjs/testing';
import { PdfParserController } from './pdf-translate.controller';

describe('PdfParserController', () => {
  let controller: PdfParserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfParserController],
    }).compile();

    controller = module.get<PdfParserController>(PdfParserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
