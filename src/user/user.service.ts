import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser)
      throw new HttpException('User already exists', HttpStatus.CONFLICT);

    const hashedPassword = await bcrypt.hash(password, 10);
    const user: User = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return user;
  }

  async findAll(): Promise<User[]> {
    const result: User[] = await this.prisma.user.findMany();

    if (result.length === 0) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async findOne(id: string): Promise<User> {
    const result: User = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!result) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  async findOneByEmail(email: string): Promise<User> {
    const result: User = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!result) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const { email, password, isAdmin } = updateUserDto;

    const exists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!exists)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    const result: User = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        email,
        password,
        isAdmin,
      },
    });

    if (!result)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    return result;
  }

  async remove(id: string): Promise<string> {
    const exists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!exists)
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return `This action removes a #${id} user`;
  }
}
