import { Controller, Get, Query, Put, Param, Body } from '@nestjs/common';
import { SportsmanService } from './sportsman.service';
import { query } from 'express';
import { FiltersSportsmanDTO } from './dto/filters-sportsman.dto';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('')
export class SportsmanController {
  constructor(private sportsmanService: SportsmanService) {}

  // @Get('')
  // // @EventPattern('hello')
  // @MessagePattern({ cmd: 'hello' })
  // async hello() {
  //   return this.sportsmanService.getAllSportsmanWithoutTeam();
  //   // return 'hello';
  // }

  @MessagePattern({ cmd: 'teamMembers' })
  @Get('/teamMembers')
  getAllTeamMembers(@Query('idTeam') idTeam: number) {
    return this.sportsmanService.getAllMembersTeam(idTeam);
  }

  @MessagePattern({ cmd: 'sportsmanWithoutTeam' })
  @Get('/sportsmanWithoutTeam')
  getAllSportsmanWithoutTeam() {
    return this.sportsmanService.getAllSportsmanWithoutTeam();
  }

  @MessagePattern({ cmd: 'sportsmanWithoutTeam' })
  @Get('/allSportsman')
  getAllSportsman(@Query('page') page: number) {
    return this.sportsmanService.getAllSportsman(page);
  }

  @Get('/filteredSportsman')
  getFilteredSportsman(@Query() dto?: FiltersSportsmanDTO) {
    return this.sportsmanService.getSportsmanFiltered(dto);
  }

  @Put('/addSportsmanToTeam')
  addSportsmanToTeam(@Body('id') id: number, @Body('idTeam') idTeam: number) {
    return this.sportsmanService.addSportsmanToTeam(id, idTeam);
  }

  @Put('/deleteSportsmanFromTeam/:id')
  deleteSportsmanFromTeam(@Param('id') id: number) {
    return this.sportsmanService.deleteSportsmanFromTeam(id);
  }
}
