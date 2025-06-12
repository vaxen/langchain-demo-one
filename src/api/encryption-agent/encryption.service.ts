import { Injectable } from '@nestjs/common';
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { EncryptionAlgorithm } from './encryption.types';
import 'dotenv/config';

@Injectable()
export class EncryptionService {
  private model: ChatOpenAI;

  constructor() {
    this.model = new ChatOpenAI({ 
      modelName: "gpt-3.5-turbo",
      temperature: 0.7
    });
  }

  async encrypt(text: string, algorithm: EncryptionAlgorithm): Promise<string> {
    const messages = [
      new SystemMessage(`Encrypt the following text using ${algorithm} encryption. Only return the encrypted text, no explanations.`),
      new HumanMessage(text),
    ];

    const response = await this.model.invoke(messages);
    return response.content.toString();
  }
} 