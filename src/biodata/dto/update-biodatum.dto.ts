import { PartialType } from '@nestjs/mapped-types';
import { CreateBiodatumDto } from './create-biodatum.dto';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBiodatumDto extends PartialType(CreateBiodatumDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nama: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  noKtp: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  posisiLamaran: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  alamat: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lahir: string;

  @ApiProperty()
  @IsBoolean()
  isCewek: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  agama: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  golDarah: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  statusPerkawinan: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  alamatKtp: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  noHp: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  orangDarurat: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  skill: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isBersediaLuarKota: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  harapanPenghasilan: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  pendidikanTerakhirId: string;

  @ApiProperty()
  @IsString()
  riwayatPelatihanId: string;

  @ApiProperty()
  @IsString()
  riwayatPekerjaanId: string;
}
