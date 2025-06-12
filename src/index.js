// Main entry point for the LangChain demo application
import 'dotenv/config';
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

// Read environment variables
const langsmithTracing = process.env.LANGSMITH_TRACING === 'true';
const langsmithApiKey = process.env.LANGSMITH_API_KEY;

// Initialize OpenAI model
const model = new ChatOpenAI({ 
  modelName: "gpt-3.5-turbo",
  temperature: 0.7
});

// Log configuration status
console.log('LangChain Demo One initialized!');
console.log('LangSmith Tracing:', langsmithTracing ? 'Enabled' : 'Disabled');
console.log('LangSmith API Key:', langsmithApiKey ? 'Configured' : 'Not configured');

// Create messages for translation
const messages = [
  new SystemMessage("Translate the following from English into Italian"),
  new HumanMessage("hi!"),
];

// Execute the translation
const main = async () => {
  try {
    const response = await model.invoke(messages);
    console.log('Translation:', response.content);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

main(); 