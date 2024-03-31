import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Request,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationJudgeDTO } from './dto/registration-judge';
import { RegistrationSportsmanDTO } from './dto/registration-sportsman';
import { RegistrationTeamDTO } from './dto/registration-team';
import { LoginUserDTO } from './dto/login-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiHeader, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RegistrationUserDTO } from './dto/registration-user';
import { MessagePattern } from '@nestjs/microservices';

@Controller({ path: 'auth' })
export class AuthController {
  constructor(private authService: AuthService) {}

  //@UseGuards(JwtAuthGuard)
  @MessagePattern({ cmd: 'getUser' })
  @Get('')
  getUser(jwt: string) {
    console.log(jwt);
    // const jwt = req.headers['authorization'];
    return this.authService.findUser(jwt);
  }

  @MessagePattern({ cmd: 'createSportsman' })
  @Post('/createSportsman')
  createSportsman(@Body() dto: RegistrationSportsmanDTO) {
    return this.authService.registrationSportsman(dto);
  }

  @MessagePattern({ cmd: 'createTeam' })
  @Post('/createTeam')
  createTeam(@Body() dto: RegistrationTeamDTO) {
    return this.authService.registrationTeam(dto);
  }

  @MessagePattern({ cmd: 'createJudge' })
  @Post('/createJudge')
  createJudge(@Body() dto: RegistrationJudgeDTO) {
    return this.authService.registrationJudge(dto);
  }

  @MessagePattern({ cmd: 'login' })
  @Post('/login')
  login(@Body() dto: LoginUserDTO) {
    console.log(dto);
    return this.authService.login(dto);
  }
}
