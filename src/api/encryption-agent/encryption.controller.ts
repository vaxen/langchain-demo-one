import { Controller, Post, Body } from '@nestjs/common';
import { EncryptionService } from './encryption.service';
import { EncryptionDto } from './encryption.types';

@Controller('api')
export class EncryptionController {
  constructor(private readonly encryptionService: EncryptionService) {}

  @Post('/encrypt')
  async encrypt(@Body() dto: EncryptionDto) {
    const encrypted = await this.encryptionService.encrypt(dto.text, dto.algorithm);
    return { encrypted };
  }
} 