import { IsNotEmpty } from 'class-validator';

export class CreateJokeDto {
  @IsNotEmpty()
  readonly setup: string;
  @IsNotEmpty()
  readonly punchline: string;
  @IsNotEmpty()
  readonly type: string;
}
