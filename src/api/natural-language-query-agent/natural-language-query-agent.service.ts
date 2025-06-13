import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class NaturalLanguageQueryAgentService {
  private openai: OpenAI;

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  private async getUsersByOrg(org: string): Promise<User[]> {
    return this.usersRepository.find({
      where: { org },
    });
  }

  async queryUsers(naturalLanguage: string): Promise<User[]> {
    // Use ChatGPT to extract the org from the query
    const prompt = `Extract the organization name (corporation-a, corporation-b, or corporation-c) from the following query. Only return the org name, nothing else.\nQuery: ${naturalLanguage}`;
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 10,
    });
    const org = completion.choices[0].message?.content?.trim();
    if (!org) throw new Error('Could not extract organization from query.');
    return this.getUsersByOrg(org);
  }
} 