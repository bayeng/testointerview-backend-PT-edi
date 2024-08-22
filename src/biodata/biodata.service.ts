import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Biodatum } from './entities/biodatum.entity';
import { QueryBiodatumDto } from './dto/query-biodatum.dto';

@Injectable()
export class BiodataService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBiodatumDto: CreateBiodatumDto): Promise<Biodatum> {
    const {
      nama,
      noKtp,
      posisiLamaran,
      alamat,
      lahir,
      isCewek,
      agama,
      golDarah,
      statusPerkawinan,
      alamatKtp,
      email,
      noHp,
      orangDarurat,
      skill,
      isBersediaLuarKota,
      harapanPenghasilan,
      pendidikanTerakhirId,
      riwayatPelatihanId,
      riwayatPekerjaanId,
      userId,
    } = createBiodatumDto;

    console.log();

    const result = await this.prisma.biodata.create({
      data: {
        nama,
        posisiLamaran,
        noKtp,
        alamat,
        lahir,
        isCewek,
        agama,
        golDarah,
        statusPerkawinan,
        alamatKtp,
        email,
        noHp,
        orangDarurat,
        skill,
        isBersediaLuarKota,
        harapanPenghasilan,
        user: {
          connect: {
            id: userId,
          },
        },
        pendidikanTerakhir: {
          connect: {
            id: pendidikanTerakhirId,
          },
        },
        riwayatPelatihan: {
          connect: {
            id: riwayatPelatihanId,
          },
        },
        riwayatPekerjaan: {
          connect: {
            id: riwayatPekerjaanId,
          },
        },
      },
      include: {
        pendidikanTerakhir: true,
        riwayatPelatihan: true,
        riwayatPekerjaan: true,
      },
    });
    return result;
  }

  async findAll(): Promise<any> {
    const result: any = await this.prisma.biodata.findMany({
      include: {
        pendidikanTerakhir: true,
        riwayatPelatihan: true,
        riwayatPekerjaan: true,
      },
    });

    if (result.length === 0)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    return result;
  }

  async findByQuery(query: QueryBiodatumDto): Promise<any> {
    const { nama, posisiLamaran } = query;
    const result: any = await this.prisma.biodata.findMany({
      where: {
        nama: nama !== undefined ? { contains: nama } : undefined,
        posisiLamaran:
          posisiLamaran !== undefined ? { contains: posisiLamaran } : undefined,
      },
      select: {
        id: true,
        nama: true,
        posisiLamaran: true,
        lahir: true,
      },
    });
    if (result.length === 0)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    return result;
  }

  async findOne(id: string): Promise<Biodatum> {
    const result: Biodatum = await this.prisma.biodata.findUnique({
      where: {
        id,
      },
      include: {
        pendidikanTerakhir: true,
        riwayatPelatihan: true,
        riwayatPekerjaan: true,
      },
    });

    if (!result)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    return result;
  }

  async update(
    id: string,
    updateBiodatumDto: UpdateBiodatumDto,
  ): Promise<Biodatum> {
    const {
      nama,
      posisiLamaran,
      noKtp,
      alamat,
      lahir,
      isCewek,
      agama,
      golDarah,
      statusPerkawinan,
      alamatKtp,
      email,
      noHp,
      orangDarurat,
      skill,
      isBersediaLuarKota,
      harapanPenghasilan,
      userId,
      pendidikanTerakhirId,
      riwayatPelatihanId,
      riwayatPekerjaanId,
    } = updateBiodatumDto;

    const exists = await this.prisma.biodata.findUnique({
      where: {
        id,
      },
    });
    if (!exists)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    const result: Biodatum = await this.prisma.biodata.update({
      where: {
        id,
      },
      data: {
        nama,
        noKtp,
        posisiLamaran,
        alamat,
        lahir,
        isCewek,
        agama,
        golDarah,
        statusPerkawinan,
        alamatKtp,
        email,
        noHp,
        orangDarurat,
        skill,
        isBersediaLuarKota,
        harapanPenghasilan,
        user: {
          connect: {
            id: userId,
          },
        },
        pendidikanTerakhir: {
          connect: {
            id: pendidikanTerakhirId,
          },
        },
        riwayatPelatihan: {
          connect: {
            id: riwayatPelatihanId,
          },
        },
        riwayatPekerjaan: {
          connect: {
            id: riwayatPekerjaanId,
          },
        },
      },
    });

    return result;
  }

  async remove(id: string): Promise<string> {
    const exists = await this.prisma.biodata.findUnique({
      where: {
        id,
      },
      include: {
        pendidikanTerakhir: true,
        riwayatPelatihan: true,
        riwayatPekerjaan: true,
      },
    });
    if (!exists)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    console.log(exists);
    if (exists.pendidikanTerakhir.id !== null) {
      await this.prisma.pendidikanTerakhir.delete({
        where: {
          id: exists.pendidikanTerakhir.id,
        },
      });
    }

    if (exists.riwayatPelatihan.id !== null) {
      await this.prisma.riwayatPelatihan.delete({
        where: {
          id: exists.riwayatPelatihan.id,
        },
      });
    }

    if (exists.riwayatPekerjaan.id !== null) {
      await this.prisma.riwayatPekerjaan.delete({
        where: {
          id: exists.riwayatPekerjaan.id,
        },
      });
    }

    await this.prisma.biodata.delete({
      where: {
        id,
      },
    });
    return `This action removes a #${id} biodatum`;
  }
}
