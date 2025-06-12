import { Module } from '@nestjs/common';
import { EssayService } from './essay.service';
import { EssayController } from './essay.controller';

@Module({
  providers: [EssayService],
  controllers: [EssayController],
  exports: [EssayService]
})
export class EssayModule {} 