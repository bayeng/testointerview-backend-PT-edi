import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLastEducationDto {
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
