import { Injectable } from '@nestjs/common';
import { RegistrationUserDTO } from 'src/api/auth/dto/registration-user';
import { PrismaService } from 'src/shared/prismaService/prisma.service';
import { CreateJudgeDTO } from './dto/create-judge.dto';
import { Judges, Prisma } from '@prisma/client';

@Injectable()
export class JudgeService {
  constructor(private prisma: PrismaService) {}

  async createJudge(dto: CreateJudgeDTO, id: number): Promise<Judges> {
    const data = {
      ...dto,
      user: {
        connect: {
          id: id,
        },
      },
    };
    const newJudge = await this.prisma.judges.create({ data });
    return newJudge;
  }

  async getJudgeById(id: number) {
    const judge = await this.prisma.judges.findUnique({ where: { id: id } });
    return judge;
  }
}
