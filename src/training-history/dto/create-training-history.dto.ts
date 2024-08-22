import { IsBoolean, IsString } from 'class-validator';

export class CreateTrainingHistoryDto {
  @IsString()
  namaPelatihan: string;

  @IsBoolean()
  isSertifikat: boolean;

  @IsString()
  tahun: string;
}
