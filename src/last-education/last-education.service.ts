import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLastEducationDto } from './dto/create-last-education.dto';
import { UpdateLastEducationDto } from './dto/update-last-education.dto';
import { PrismaService } from '../prisma/prisma.service';
import { LastEducation } from './entities/last-education.entity';

@Injectable()
export class LastEducationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createLastEducationDto: CreateLastEducationDto,
  ): Promise<LastEducation> {
    const { ipk, jurusan, lulus, namaInstitusi, jenjangPendidikan } =
      createLastEducationDto;

    const result: LastEducation = await this.prisma.pendidikanTerakhir.create({
      data: {
        jenjangPendidikan,
        namaInstitusi,
        jurusan,
        lulus,
        ipk,
      },
    });

    return result;
  }

  async findAll(): Promise<LastEducation[]> {
    const result: LastEducation[] =
      await this.prisma.pendidikanTerakhir.findMany();

    if (result.length === 0)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    return result;
  }

  async findOne(id: string): Promise<LastEducation> {
    const result: LastEducation =
      await this.prisma.pendidikanTerakhir.findUnique({
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
    updateLastEducationDto: UpdateLastEducationDto,
  ): Promise<LastEducation> {
    const { ipk, jurusan, lulus, namaInstitusi, jenjangPendidikan } =
      updateLastEducationDto;

    const exists = await this.prisma.pendidikanTerakhir.findUnique({
      where: {
        id,
      },
    });
    if (!exists)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    const result: LastEducation = await this.prisma.pendidikanTerakhir.update({
      where: {
        id,
      },
      data: {
        jenjangPendidikan,
        namaInstitusi,
        jurusan,
        lulus,
        ipk,
      },
    });
    if (!result)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    return result;
  }

  async remove(id: string): Promise<string> {
    const exists = await this.prisma.pendidikanTerakhir.findUnique({
      where: {
        id,
      },
    });
    if (!exists)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    await this.prisma.pendidikanTerakhir.delete({
      where: {
        id,
      },
    });
    return `This action removes id #${id} lastEducation`;
  }
}
