import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateBiodatumDto {
  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsNotEmpty()
  @IsString()
  noKtp: string;

  @IsNotEmpty()
  @IsString()
  posisiLamaran: string;

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
  @IsNumber()
  harapanPenghasilan: number;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsString()
  pendidikanTerakhirId: string;

  @IsString()
  riwayatPelatihanId: string;

  @IsString()
  riwayatPekerjaanId: string;
}
