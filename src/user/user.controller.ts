import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Version,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Response } from '../helper/response';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Version('1')
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<Response> {
    try {
      const result = await this.userService.create(createUserDto);
      return Response.success(
        HttpStatus.CREATED,
        'Data has been created',
        result,
      );
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @Get()
  async findAll(): Promise<Response> {
    try {
      const result = await this.userService.findAll();
      return Response.success(HttpStatus.OK, 'Success get all users', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Response> {
    try {
      const result = await this.userService.findOne(id);
      return Response.success(HttpStatus.OK, 'Data user been found', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<Response> {
    try {
      const result = await this.userService.update(id, updateUserDto);
      return Response.success(
        HttpStatus.OK,
        'Data user has been updated',
        result,
      );
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Response> {
    try {
      const result = await this.userService.remove(id);
      return Response.success(
        HttpStatus.OK,
        'Data user has been deleted',
        result,
      );
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }
}
