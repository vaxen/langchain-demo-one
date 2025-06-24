import { Injectable } from '@nestjs/common';
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { EssayResponseDto, IterationResult } from './essay.types';
import 'dotenv/config';

@Injectable()
export class EssayService {
  private writerModel: ChatOpenAI;
  private graderModel: ChatOpenAI;

  constructor() {
    this.writerModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      temperature: 0.7
    });
    this.graderModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      temperature: 0.7
    });
  }

  async generateEssay(author: string): Promise<EssayResponseDto> {
    const iterations: IterationResult[] = [];

    // First iteration
    const firstEssay = await this.generateEssayContent(author);
    const firstFeedback = await this.getFeedback(firstEssay);
    iterations.push({
      essay: firstEssay,
      feedback: firstFeedback
    });

    // Second iteration with feedback
    const secondEssay = await this.generateEssayContent(author, firstFeedback);
    const secondFeedback = await this.getFeedback(secondEssay);
    iterations.push({
      essay: secondEssay,
      feedback: secondFeedback
    });

    return { iterations };
  }

  private async generateEssayContent(author: string, previousFeedback?: string): Promise<string> {
    const messages = [
      new SystemMessage(`You are an expert essay writer specializing in British literature. 
      Write a 5-paragraph essay about ${author}. 
      Focus on their literary contributions, writing style, and impact on literature.
      ${previousFeedback ? `Consider this feedback for improvement: ${previousFeedback}` : ''}`),
      new HumanMessage(`Please write a comprehensive essay about ${author}.`)
    ];

    const response = await this.writerModel.invoke(messages);
    return response.content.toString();
  }

  private async getFeedback(essay: string): Promise<string> {
    const messages = [
      new SystemMessage(`You are a strict but fair literature professor grading an essay.
      Provide detailed feedback on:
      1. Content and depth of analysis
      2. Structure and organization
      3. Writing style and clarity
      4. Historical accuracy
      5. Specific recommendations for improvement`),
      new HumanMessage(`Please grade and provide feedback on this essay:\n\n${essay}`)
    ];

    const response = await this.graderModel.invoke(messages);
    return response.content.toString();
  }
}