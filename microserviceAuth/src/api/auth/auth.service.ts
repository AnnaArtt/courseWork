import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../shared/prismaService/prisma.service';
import { JudgeService } from 'src/api/judge/judge.service';
import { TeamService } from 'src/api/team/team.service';
import { SportsmanService } from 'src/api/sportsman/sportsman.service';
import { RegistrationUserDTO } from './dto/registration-user';
import { RegistrationSportsmanDTO } from './dto/registration-sportsman';
import { RegistrationJudgeDTO } from './dto/registration-judge';
import { RegistrationTeamDTO } from './dto/registration-team';
import { LoginUserDTO } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '@prisma/client';
import { CreateSportsmanDTO } from '../sportsman/dto/create-sportsman.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private judgeService: JudgeService,
    private teamService: TeamService,
    private sportsmanService: SportsmanService,
    private jwtService: JwtService,
  ) {}

  async findUser(jwt: String) {
    const token = jwt.split(' ')[1];
    console.log(token);
    const { role, id } = this.jwtService.verify(token, {
      secret: process.env.PRIVATE_KEY,
    });
    let user;
    switch (role) {
      case 'sportsman':
        user = await this.sportsmanService.getSportsmanById(id);
        break;
      case 'judge':
        user = await this.judgeService.getJudgeById(id);
        break;
      case 'team':
        user = await this.teamService.getTeamById(id);
        break;
      default:
        break;
    }
    return { user, role };
  }

  async login(dto: LoginUserDTO) {
    const user = await this.validateUser(dto);
    let token = await this.generateToken(user);
    return { ...token, user };
  }

  async registrationSportsman(dto: RegistrationSportsmanDTO) {
    const registration = await this.registration(dto);
    const newSportsman = await this.sportsmanService.createSportsman(
      dto.userInfo,
      registration.id,
    );
    return { newSportsman, registration };
  }

  async registrationJudge(dto: RegistrationJudgeDTO) {
    const registration = await this.registration(dto);
    const newJudge = await this.judgeService.createJudge(
      dto.userInfo,
      registration.id,
    );
    return { newJudge, registration };
  }

  async registrationTeam(dto: RegistrationTeamDTO) {
    const registration = await this.registration(dto);
    const newTeam = await this.teamService.createTeam(
      dto.userInfo,
      registration.id,
    );
    return { newTeam, registration };
  }

  private async registration(dto: RegistrationUserDTO) {
    const password = await bcrypt.hash('1111', 5);
    const data = {
      role: dto.role,
      login: dto.userInfo.name,
      password: password,
    };
    console.log(data);
    const newUser = await this.prisma.user.create({ data });
    return newUser;
  }

  private async generateToken(user: User) {
    const payload = { id: user.id, role: user.role };
    return {
      token: this.jwtService.sign(payload, {
        secret: process.env.PRIVATE_KEY,
      }),
    };
  }

  private async validateUser(dto: LoginUserDTO): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          login: dto.login,
        },
      });
      const passwordEquals = await bcrypt.compare(dto.password, user.password);

      if (user && passwordEquals) {
        return user;
      }
    } catch (error) {
      throw new UnauthorizedException({ message: 'Wrong login or password' });
    }
  }
}
