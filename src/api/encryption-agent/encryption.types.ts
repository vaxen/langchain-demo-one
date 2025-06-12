//this can be extended to include more encryption algorithms
export enum EncryptionAlgorithm {
  CAESAR = 'caesar',
  REVERSE = 'reverse',
  BASE64 = 'base64',
  ROT13 = 'rot13'
}

export class EncryptionDto {
  text: string;
  algorithm: EncryptionAlgorithm;
} 