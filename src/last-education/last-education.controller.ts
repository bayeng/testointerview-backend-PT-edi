import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { LastEducationService } from './last-education.service';
import { CreateLastEducationDto } from './dto/create-last-education.dto';
import { UpdateLastEducationDto } from './dto/update-last-education.dto';
import { Response } from '../helper/response';
import { AuthGuard } from '@nestjs/passport';
import { RbacGuard } from '../auth/guard/rbac.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(RbacGuard)
@ApiTags('Last Education')
@Controller('last-education')
export class LastEducationController {
  constructor(private readonly lastEducationService: LastEducationService) {}

  @Version('1')
  @Post()
  async create(
    @Body() createLastEducationDto: CreateLastEducationDto,
  ): Promise<Response> {
    try {
      const result = await this.lastEducationService.create(
        createLastEducationDto,
      );

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
      const result = await this.lastEducationService.findAll();
      return Response.success(
        HttpStatus.OK,
        'Success get all last education',
        result,
      );
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Response> {
    try {
      const result = await this.lastEducationService.findOne(id);
      return Response.success(
        HttpStatus.OK,
        'Success get last education',
        result,
      );
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLastEducationDto: UpdateLastEducationDto,
  ): Promise<Response> {
    try {
      const result = await this.lastEducationService.update(
        id,
        updateLastEducationDto,
      );

      return Response.success(
        HttpStatus.OK,
        'Success update last education',
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
      const result = await this.lastEducationService.remove(id);
      return Response.success(
        HttpStatus.OK,
        'Success delete last education',
        result,
      );
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }
}
