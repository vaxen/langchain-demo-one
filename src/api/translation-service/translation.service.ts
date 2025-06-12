import { Injectable } from '@nestjs/common';
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import 'dotenv/config';

@Injectable()
export class TranslationService {
  private model: ChatOpenAI;

  constructor() {
    this.model = new ChatOpenAI({ 
      modelName: "gpt-3.5-turbo",
      temperature: 0.7
    });
  }

  async translateToItalian(text: string): Promise<string> {
    const messages = [
      new SystemMessage("Translate the following from English into Italian"),
      new HumanMessage(text),
    ];

    const response = await this.model.invoke(messages);
    return response.content.toString();
  }
} 