import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTrainingHistoryDto } from './dto/create-training-history.dto';
import { UpdateTrainingHistoryDto } from './dto/update-training-history.dto';
import { PrismaService } from '../prisma/prisma.service';
import { TrainingHistory } from './entities/training-history.entity';

@Injectable()
export class TrainingHistoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createTrainingHistoryDto: CreateTrainingHistoryDto,
  ): Promise<TrainingHistory> {
    const { namaPelatihan, isSertifikat, tahun } = createTrainingHistoryDto;

    const result: TrainingHistory = await this.prisma.riwayatPelatihan.create({
      data: {
        namaPelatihan,
        isSertifikat,
        tahun,
      },
    });

    if (!result)
      throw new HttpException('failed create data', HttpStatus.NOT_FOUND);

    return result;
  }

  async findAll(): Promise<TrainingHistory[]> {
    const result: TrainingHistory[] =
      await this.prisma.riwayatPelatihan.findMany();

    if (result.length === 0)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    return result;
  }

  async findOne(id: string): Promise<TrainingHistory> {
    const result: TrainingHistory =
      await this.prisma.riwayatPelatihan.findUnique({
        where: {
          id,
        },
      });

    if (!result)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    return result;
  }

  async update(
    id: string,
    updateTrainingHistoryDto: UpdateTrainingHistoryDto,
  ): Promise<TrainingHistory> {
    const { namaPelatihan, isSertifikat, tahun } = updateTrainingHistoryDto;
    const exists = await this.prisma.riwayatPelatihan.findUnique({
      where: {
        id,
      },
    });
    if (!exists)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    const result: TrainingHistory = await this.prisma.riwayatPelatihan.update({
      where: {
        id,
      },
      data: {
        namaPelatihan,
        isSertifikat,
        tahun,
      },
    });

    return result;
  }

  async remove(id: string): Promise<string> {
    const exists = await this.prisma.riwayatPelatihan.findUnique({
      where: {
        id,
      },
    });
    if (!exists)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    await this.prisma.riwayatPelatihan.delete({
      where: {
        id,
      },
    });
    return `This action removes a #${id} trainingHistory`;
  }
}
