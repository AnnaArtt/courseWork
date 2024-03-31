import { Controller, Get, Query } from '@nestjs/common';
import { TeamService } from './team.service';
import { FiltersTeamDTO } from './dto/filteres-team.dto';

@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get('/filteredTeams')
  getFilteredSportsman(@Query() dto?: FiltersTeamDTO) {
    return this.teamService.getTeamsFiltered(dto);
  }
}
