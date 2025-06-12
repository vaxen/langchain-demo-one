export class EssayRequestDto {
  author: string;
}

export class IterationResult {
  essay: string;
  feedback: string;
}

export class EssayResponseDto {
  iterations: IterationResult[];
} 