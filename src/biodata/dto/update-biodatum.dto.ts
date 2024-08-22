import { PartialType } from '@nestjs/mapped-types';
import { CreateBiodatumDto } from './create-biodatum.dto';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class UpdateBiodatumDto extends PartialType(CreateBiodatumDto) {
  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsNotEmpty()
  @IsString()
  noKtp: string;

  @IsNotEmpty()
  @IsString()
  alamat: string;

  @IsNotEmpty()
  @IsString()
  lahir: string;

  @IsBoolean()
  isCewek: boolean;

  @IsNotEmpty()
  @IsString()
  agama: string;

  @IsNotEmpty()
  @IsString()
  golDarah: string;

  @IsNotEmpty()
  @IsString()
  statusPerkawinan: string;

  @IsNotEmpty()
  @IsString()
  alamatKtp: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  noHp: string;

  @IsNotEmpty()
  @IsString()
  orangDarurat: string;

  @IsNotEmpty()
  @IsString()
  skill: string;

  @IsNotEmpty()
  @IsBoolean()
  isBersediaLuarKota: boolean;

  @IsNotEmpty()
  @IsString()
  posisiLamaran: string;

  @IsNotEmpty()
  @IsNumber()
  harapanPenghasilan: number;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  pendidikanTerakhirId: string;

  @IsNotEmpty()
  @IsString()
  riwayatPelatihanId: string;

  @IsNotEmpty()
  @IsString()
  riwayatPekerjaanId: string;
}
