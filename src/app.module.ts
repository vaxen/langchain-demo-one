import { Module } from '@nestjs/common';
import { TranslationModule } from './api/translation-service/translation.module';

@Module({
  imports: [TranslationModule],
})
export class AppModule {} 