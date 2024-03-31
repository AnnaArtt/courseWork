import { CreateSportsmanDTO } from 'src/api/sportsman/dto/create-sportsman.dto';

export class RegistrationSportsmanDTO {
  readonly role: 'sportsman';
  readonly userInfo: CreateSportsmanDTO;
}
