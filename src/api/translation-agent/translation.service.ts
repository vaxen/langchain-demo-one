import { Injectable } from '@nestjs/common';
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import 'dotenv/config';
import { TargetLanguage } from './translation.types';

@Injectable()
export class TranslationService {
  private model: ChatOpenAI;

  constructor() {
    this.model = new ChatOpenAI({ 
      modelName: "gpt-3.5-turbo",
      temperature: 0.7
    });
  }

  async translate(text: string, targetLanguage: TargetLanguage): Promise<string> {
    const messages = [
      new SystemMessage(`Translate the following from English into ${targetLanguage}`),
      new HumanMessage(text),
    ];

    const response = await this.model.invoke(messages);
    return response.content.toString();
  }
} 