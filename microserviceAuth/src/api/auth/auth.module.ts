import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/shared/prismaService/prisma.service';
import { JudgeService } from 'src/api/judge/judge.service';
import { TeamService } from 'src/api/team/team.service';
import { SportsmanService } from 'src/api/sportsman/sportsman.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    JudgeService,
    TeamService,
    SportsmanService,
    JwtService,
  ],
  imports: [
    JwtModule.register({
      secret: process.env.PRIVATE_KEY,
      signOptions: {
        expiresIn: '500h',
      },
    }),
  ],
  exports: [AuthModule, JwtModule],
})
export class AuthModule {}
