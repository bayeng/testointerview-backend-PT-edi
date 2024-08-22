export class Biodatum {
  nama: string;
  posisiLamaran: string;
  alamat: string;
  lahir: string;
  isCewek: boolean;
  agama: string;
  golDarah: string;
  statusPerkawinan: string;
  alamatKtp: string;
  noKtp: string;
  email: string;
  noHp: string;
  orangDarurat: string;
  skill: string;
  isBersediaLuarKota: boolean;
  harapanPenghasilan: number;
  userId: string;
  pendidikanTerakhirId?: string;
  riwayatPelatihanId?: string;
  riwayatPekerjaanId?: string;
  // relationship
  user?: any;
  pendidikanTerakhir?: any;
  riwayatPelatihan?: any;
  riwayatPekerjaan?: any;
}
