import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { TranslationModule } from './api/translation-agent/translation.module';
import { EncryptionModule } from './api/encryption-agent/encryption.module';
import { EssayModule } from './api/essay-agent/essay.module';
import { NaturalLanguageQueryAgentModule } from './api/natural-language-query-agent/natural-language-query-agent.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TranslationModule,
    EncryptionModule,
    EssayModule,
    NaturalLanguageQueryAgentModule,
  ],
})
export class AppModule {} 