import { IsNumber, IsString } from 'class-validator';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

export class CreateWorkHistoryDto {
  @ApiProperty()
  @IsString()
  namaPerusahaan: string;

  @ApiProperty()
  @IsString()
  posisiTerakhir: string;

  @ApiProperty()
  @IsNumber()
  pendapatanTerakhir: number;

  @ApiProperty()
  @IsString()
  tahun: string;
}
