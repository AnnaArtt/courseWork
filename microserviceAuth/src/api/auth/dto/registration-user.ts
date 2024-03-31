import { ApiProperty } from '@nestjs/swagger';
import { ROLE } from '@prisma/client';
import { CreateJudgeDTO } from 'src/api/judge/dto/create-judge.dto';
import { CreateSportsmanDTO } from 'src/api/sportsman/dto/create-sportsman.dto';
import { CreateTeamDTO } from 'src/api/team/dto/create-team.dto';

export class RegistrationUserDTO {
  @ApiProperty({ example: 'sportsman/judge/team' })
  readonly role: ROLE;
  @ApiProperty({ type: CreateSportsmanDTO })
  readonly userInfo: CreateJudgeDTO | CreateSportsmanDTO | CreateTeamDTO;
}
