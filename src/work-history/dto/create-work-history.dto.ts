import { IsNumber, IsString } from 'class-validator';

export class CreateWorkHistoryDto {
  @IsString()
  namaPerusahaan: string;

  @IsString()
  posisiTerakhir: string;

  @IsNumber()
  pendapatanTerakhir: number;

  @IsString()
  tahun: string;
}
