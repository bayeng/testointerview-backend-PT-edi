import { ApiProperty } from '@nestjs/swagger';

export class LastEducation {
  @ApiProperty()
  id: string;
  @ApiProperty()
  jenjangPendidikan: string;

  @ApiProperty()
  namaInstitusi: string;

  @ApiProperty()
  jurusan: string;

  @ApiProperty()
  lulus: string;

  @ApiProperty()
  ipk: number;

  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
