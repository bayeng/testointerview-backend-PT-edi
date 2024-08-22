import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainingHistoryDto } from './create-training-history.dto';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateTrainingHistoryDto extends PartialType(
  CreateTrainingHistoryDto,
) {
  @IsString()
  namaPelatihan: string;

  @IsBoolean()
  isSertifikat: boolean;

  @IsString()
  tahun: string;
}
