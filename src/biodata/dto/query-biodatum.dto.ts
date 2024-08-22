import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QueryBiodatumDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nama: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  posisiLamaran: string;
}
