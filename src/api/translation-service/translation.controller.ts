import { Controller, Post, Body } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { TranslationDto } from './translation.types';

@Controller('api')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Post('/translation')
  async translate(@Body() dto: TranslationDto) {
    const translation = await this.translationService.translate(dto.text, dto.targetLanguage);
    return { translation };
  }
} 