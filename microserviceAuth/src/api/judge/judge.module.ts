import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/prismaService/prisma.service';
import { JudgeController } from './judge.controller';
import { JudgeService } from './judge.service';

@Module({
  controllers: [JudgeController],
  providers: [JudgeService, PrismaService],
})
export class JudgeModule {}
