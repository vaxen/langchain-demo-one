import { Controller, Post, Body } from '@nestjs/common';
import { NaturalLanguageQueryAgentService } from './natural-language-query-agent.service';

@Controller('api/nlq')
export class NaturalLanguageQueryAgentController {
  constructor(private readonly nlqService: NaturalLanguageQueryAgentService) {}

  @Post('users')
  async getUsersByNaturalLanguage(@Body('query') query: string) {
    const users = await this.nlqService.queryUsers(query);
    return { users };
  }
} 