import { Controller, Post, Body } from '@nestjs/common';
import { TranslationService } from './translation.service';

class TranslationDto {
  text: string;
}

@Controller('api')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Post('/translation')
  async translateToItalian(@Body() dto: TranslationDto) {
    const translation = await this.translationService.translateToItalian(dto.text);
    return { translation };
  }
} 