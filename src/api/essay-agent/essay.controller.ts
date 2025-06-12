import { Controller, Post, Body } from '@nestjs/common';
import { EssayService } from './essay.service';
import { EssayRequestDto, EssayResponseDto } from './essay.types';

@Controller('api')
export class EssayController {
  constructor(private readonly essayService: EssayService) {}

  @Post('/essay')
  async generateEssay(@Body() dto: EssayRequestDto): Promise<EssayResponseDto> {
    return this.essayService.generateEssay(dto.author);
  }
} 