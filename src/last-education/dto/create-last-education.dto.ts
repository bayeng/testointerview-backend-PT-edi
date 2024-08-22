import { IsNumber, IsString } from 'class-validator';

export class CreateLastEducationDto {
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
