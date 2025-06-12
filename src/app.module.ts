import { Module } from '@nestjs/common';
import { TranslationModule } from './api/translation-agent/translation.module';
import { EncryptionModule } from './api/encryption-agent/encryption.module';

@Module({
  imports: [TranslationModule, EncryptionModule],
})
export class AppModule {} 