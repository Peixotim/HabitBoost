import { IsEnum, IsString, IsUUID, MaxLength } from 'class-validator';
import { FrequencyTypes } from '../model/objective.enum';

export class ObjectiveCreateDTO {
  @IsString()
  @MaxLength(255)
  name: string;

  @IsString()
  @MaxLength(255)
  description: string;

  @IsEnum(FrequencyTypes)
  frequency: FrequencyTypes;

  frequencyDays: number[];

  @IsUUID()
  userId: string;
}
