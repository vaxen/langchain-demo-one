import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { NaturalLanguageQueryAgentService } from './natural-language-query-agent.service';
import { NaturalLanguageQueryAgentController } from './natural-language-query-agent.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [NaturalLanguageQueryAgentService],
  controllers: [NaturalLanguageQueryAgentController],
  exports: [NaturalLanguageQueryAgentService],
})
export class NaturalLanguageQueryAgentModule {} 