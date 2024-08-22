import { PartialType } from '@nestjs/mapped-types';
import { CreateLastEducationDto } from './create-last-education.dto';
import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLastEducationDto extends PartialType(
  CreateLastEducationDto,
) {
  @ApiProperty()
  @IsString()
  jenjangPendidikan: string;

  @ApiProperty()
  @IsString()
  namaInstitusi: string;

  @ApiProperty()
  @IsString()
  jurusan: string;

  @ApiProperty()
  @IsString()
  lulus: string;

  @ApiProperty()
  @IsNumber()
  ipk: number;
}
