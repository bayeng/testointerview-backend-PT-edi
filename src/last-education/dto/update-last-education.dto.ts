import { PartialType } from '@nestjs/mapped-types';
import { CreateLastEducationDto } from './create-last-education.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateLastEducationDto extends PartialType(
  CreateLastEducationDto,
) {
  @IsString()
  jenjangPendidikan: string;

  @IsString()
  namaInstitusi: string;

  @IsString()
  jurusan: string;

  @IsString()
  lulus: string;

  @IsNumber()
  ipk: number;
}
