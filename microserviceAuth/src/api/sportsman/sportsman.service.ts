import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prismaService/prisma.service';
import { CreateSportsmanDTO } from './dto/create-sportsman.dto';
import { FiltersSportsmanDTO } from './dto/filters-sportsman.dto';
import { Prisma, Sportsman } from '@prisma/client';
import { deleteEmptyKey } from 'src/shared/helpers/deleteEmptyKey';
@Injectable()
export class SportsmanService {
  constructor(private prisma: PrismaService) {}

  async createSportsman(
    dto: CreateSportsmanDTO,
    id: number,
  ): Promise<Sportsman> {
    const data = {
      name: dto.name,
      sex: dto.sex,
      year: dto.year,
      category: dto.category,
      user: {
        connect: {
          id: id,
        },
      },
      team: {
        connect: {
          id: dto.team,
        },
      },
    };
    const newSportsman = await this.prisma.sportsman.create({ data });
    return newSportsman;
  }

  async getSportsmanById(id: number) {
    const sportsman = await this.prisma.sportsman.findUnique({
      where: { id: id },
    });
    return sportsman;
  }

  async getAllMembersTeam(idTeam: number) {
    const temMembers = await this.prisma.sportsman.findMany({
      where: { idTeam: Number(idTeam) },
    });
    return temMembers;
  }

  async getAllSportsmanWithoutTeam() {
    const sportsmanWithoutTeam = await this.prisma.sportsman.findMany({
      where: { idTeam: null },
    });
    return sportsmanWithoutTeam;
  }

  async getSportsmanFiltered(filters: FiltersSportsmanDTO) {
    let where = {
      name: {},
      sex: {},
      year: {},
      category: {},
    };

    if (filters.name !== undefined) {
      where.name = { contains: filters.name };
    }
    if (filters.sex !== undefined) {
      where.sex = { in: filters.sex };
    }
    if (filters.category !== undefined) {
      where.category = { in: filters.category };
    }
    if (filters.toYear !== undefined) {
      where.year = { lte: filters.toYear };
    }
    if (filters.fromYear !== undefined) {
      where.year = { ...where.year, gte: filters.fromYear };
    }
    console.log(where);

    deleteEmptyKey(where);

    const allSportsman = await this.prisma.sportsman.findMany({
      where: { ...where },
      include: {
        team: true,
      },
    });
    return allSportsman;
  }

  async getAllSportsman(page: number) {
    const allSportsman = await this.prisma.sportsman.findMany();
    const paginatedArray = this.paginate(allSportsman, page);
    return paginatedArray;
  }

  paginate(array: Array<object>, page: number) {
    const step = 5;
    const endIndex = step * page;
    const paginatedArray = array.slice(endIndex - step, endIndex);
    return paginatedArray;
  }

  async addSportsmanToTeam(id: number, idTeam: number) {
    console.log(id);
    console.log(idTeam);
    const sportsman = await this.prisma.sportsman.update({
      where: { id: Number(id) },
      data: {
        idTeam: idTeam,
      },
    });
    return sportsman;
  }

  async deleteSportsmanFromTeam(id: number) {
    const sportsman = await this.prisma.sportsman.update({
      where: { id: Number(id) },
      data: {
        idTeam: null,
      },
    });
    return sportsman;
  }
}
