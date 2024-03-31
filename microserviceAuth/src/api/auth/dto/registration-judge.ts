import { CreateJudgeDTO } from 'src/api/judge/dto/create-judge.dto';

export class RegistrationJudgeDTO {
  readonly role: 'judge';
  readonly userInfo: CreateJudgeDTO;
}
