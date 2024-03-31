import { Controller, Post, Body } from '@nestjs/common';
import { JudgeService } from './judge.service';
import { CreateJudgeDTO } from './dto/create-judge.dto';
@Controller('judge')
export class JudgeController {
  constructor(private judgeService: JudgeService) {}
}
