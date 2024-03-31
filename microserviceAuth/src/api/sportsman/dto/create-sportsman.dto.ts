import { ApiProperty } from '@nestjs/swagger';
import { SEX } from '@prisma/client';

export class CreateSportsmanDTO {
  @ApiProperty({ example: 'Name Surname' })
  readonly name: string;
  @ApiProperty({ example: 'male' })
  readonly sex: SEX;
  @ApiProperty({ example: 'Team Name' })
  readonly team: number;
  @ApiProperty({ example: '2003' })
  readonly year: number;
  @ApiProperty({ example: 'KMC' })
  readonly category: string;
}
