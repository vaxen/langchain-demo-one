import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { User } from './entities/user.entity';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { ChatOpenAI } from '@langchain/openai';

@Injectable()
export class NaturalLanguageQueryAgentService {
  private naturalQueryModel: ChatOpenAI;

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {
    this.naturalQueryModel = new ChatOpenAI({ 
      modelName: "gpt-3.5-turbo",
      temperature: 0.2
    });
  }

  // Extract query parameters from natural language
  private async extractQueryParams(naturalLanguage: string): Promise<{ org?: string; name?: string }> {
    const prompt = `
Extract the organization and user name from the natural language query below.

- Organization must be one of: "corporation-a", "corporation-b", or "corporation-c".
- The name can be exact or partial. If partial, use a SQL-style wildcard (e.g., "John%" for names starting with John).
- Return a JSON object with optional "org" and "name" keys. Do not include anything else.

Query: "${naturalLanguage}"
`;

    const messages = [
      new SystemMessage("You extract structured parameters for a database query."),
      new HumanMessage(prompt),
    ];

    const response = await this.naturalQueryModel.invoke(messages);
    const content = response.content.toString().trim();

    try {
      return JSON.parse(content);
    } catch (err) {
      console.warn('Failed to parse model response:', content);
      throw new Error('Could not extract query parameters.');
    }
  }

  // Query users using extracted filters
  async queryUsers(naturalLanguage: string): Promise<User[]> {
    const filters = await this.extractQueryParams(naturalLanguage);
    console.log('Filters:', filters);
    const where: any = {};
    if (filters.org) where.org = ILike(filters.org);     // Case-insensitive org match
    if (filters.name) where.name = ILike(filters.name);  // Case-insensitive name LIKE

    return this.usersRepository.find({ where });
  }
}
