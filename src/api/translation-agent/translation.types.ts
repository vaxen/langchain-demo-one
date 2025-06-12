export enum TargetLanguage {
  ITALIAN = 'italian',
  SPANISH = 'spanish',
  FRENCH = 'french',
  GERMAN = 'german',
  PORTUGUESE = 'portuguese',
  JAPANESE = 'japanese',
  KOREAN = 'korean'
}

export class TranslationDto {
  text: string;
  targetLanguage: TargetLanguage;
} 