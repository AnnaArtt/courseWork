import { CreateTeamDTO } from 'src/api/team/dto/create-team.dto';

export class RegistrationTeamDTO {
  readonly role: 'team';
  readonly userInfo: CreateTeamDTO;
}
