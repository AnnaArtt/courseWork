import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prismaService/prisma.service';
import { CreateTeamDTO } from './dto/create-team.dto';
import { Team } from '@prisma/client';
import { deleteEmptyKey } from 'src/shared/helpers/deleteEmptyKey';
import { FiltersTeamDTO } from './dto/filteres-team.dto';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async createTeam(dto: CreateTeamDTO, id: number): Promise<Team> {
    const data = {
      ...dto,
      user: {
        connect: {
          id: id,
        },
      },
    };
    const newTeam = await this.prisma.team.create({ data });
    return newTeam;
  }

  async getTeamById(id: number) {
    const team = await this.prisma.team.findUnique({ where: { id: id } });
    return team;
  }

  async getTeamsFiltered(filters: FiltersTeamDTO) {
    let where = {
      name: {},
    };

    if (filters.name !== undefined) {
      where.name = { contains: filters.name };
    }
    console.log(where);

    deleteEmptyKey(where);

    const allTeams = await this.prisma.team.findMany({
      where: { ...where },
    });
    return allTeams;
  }
}
