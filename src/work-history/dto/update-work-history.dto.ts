import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkHistoryDto } from './create-work-history.dto';
import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateWorkHistoryDto extends PartialType(CreateWorkHistoryDto) {
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
