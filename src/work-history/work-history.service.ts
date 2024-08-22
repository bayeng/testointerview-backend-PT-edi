import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateWorkHistoryDto } from './dto/create-work-history.dto';
import { UpdateWorkHistoryDto } from './dto/update-work-history.dto';
import { PrismaService } from '../prisma/prisma.service';
import { WorkHistory } from './entities/work-history.entity';

@Injectable()
export class WorkHistoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createWorkHistoryDto: CreateWorkHistoryDto,
  ): Promise<WorkHistory> {
    const { namaPerusahaan, posisiTerakhir, pendapatanTerakhir, tahun } =
      createWorkHistoryDto;

    const result = await this.prisma.riwayatPekerjaan.create({
      data: {
        namaPerusahaan,
        posisiTerakhir,
        pendapatanTerakhir,
        tahun,
      },
    });
    return result;
  }

  async findAll(): Promise<WorkHistory[]> {
    const result: WorkHistory[] = await this.prisma.riwayatPekerjaan.findMany();

    if (result.length === 0) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  async findOne(id: string): Promise<WorkHistory> {
    const result: WorkHistory = await this.prisma.riwayatPekerjaan.findUnique({
      where: {
        id,
      },
    });
    if (!result) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  async update(
    id: string,
    updateWorkHistoryDto: UpdateWorkHistoryDto,
  ): Promise<WorkHistory> {
    const { namaPerusahaan, posisiTerakhir, pendapatanTerakhir, tahun } =
      updateWorkHistoryDto;

    const exists = await this.prisma.riwayatPekerjaan.findUnique({
      where: {
        id,
      },
    });
    if (!exists) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }

    const result: WorkHistory = await this.prisma.riwayatPekerjaan.update({
      where: {
        id,
      },
      data: {
        namaPerusahaan,
        posisiTerakhir,
        pendapatanTerakhir,
        tahun,
      },
    });

    if (!result) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  async remove(id: string): Promise<string> {
    const exists = this.prisma.riwayatPekerjaan.findUnique({
      where: {
        id,
      },
    });

    if (!exists) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }

    await this.prisma.riwayatPekerjaan.delete({
      where: {
        id,
      },
    });

    return `data with id ${id} has been deleted`;
  }
}
