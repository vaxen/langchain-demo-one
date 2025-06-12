import { Module } from '@nestjs/common';
import { TranslationModule } from './api/translation-agent/translation.module';
import { EncryptionModule } from './api/encryption-agent/encryption.module';
import { EssayModule } from './api/essay-agent/essay.module';

@Module({
  imports: [TranslationModule, EncryptionModule, EssayModule],
})
export class AppModule {} 