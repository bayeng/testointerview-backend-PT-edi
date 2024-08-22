import { IsOptional, IsString } from 'class-validator';

export class QueryBiodatumDto {
  @IsOptional()
  @IsString()
  nama: string;

  @IsOptional()
  @IsString()
  posisiLamaran: string;
}
