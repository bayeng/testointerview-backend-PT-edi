import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkHistoryDto } from './create-work-history.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateWorkHistoryDto extends PartialType(CreateWorkHistoryDto) {
  @IsString()
  namaPerusahaan: string;

  @IsString()
  posisiTerakhir: string;

  @IsNumber()
  pendapatanTerakhir: number;

  @IsString()
  tahun: string;
}
