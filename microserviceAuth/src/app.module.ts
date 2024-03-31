import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SportsmanController } from './api/sportsman/sportsman.controller';
import { SportsmanService } from './api/sportsman/sportsman.service';
import { SportsmanModule } from './api/sportsman/sportsman.module';
import { TeamController } from './api/team/team.controller';
import { TeamService } from './api/team/team.service';
import { TeamModule } from './api/team/team.module';
import { JudgeController } from './api/judge/judge.controller';
import { JudgeService } from './api/judge/judge.service';
import { JudgeModule } from './api/judge/judge.module';
import { AuthController } from './api/auth/auth.controller';
import { AuthService } from './api/auth/auth.service';
import { AuthModule } from './api/auth/auth.module';
import { PrismaService } from './shared/prismaService/prisma.service';

@Module({
  imports: [SportsmanModule, TeamModule, JudgeModule, AuthModule],
  controllers: [
    AppController,
    SportsmanController,
    TeamController,
    JudgeController,
    AuthController,
  ],
  providers: [
    AppService,
    SportsmanService,
    TeamService,
    JudgeService,
    AuthService,
    PrismaService,
  ],
})
export class AppModule {}
