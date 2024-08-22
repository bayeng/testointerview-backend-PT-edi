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
import { WorkHistoryService } from './work-history.service';
import { CreateWorkHistoryDto } from './dto/create-work-history.dto';
import { UpdateWorkHistoryDto } from './dto/update-work-history.dto';
import { Response } from '../helper/response';
import { WorkHistory } from './entities/work-history.entity';

@Controller('work-history')
export class WorkHistoryController {
  constructor(private readonly workHistoryService: WorkHistoryService) {}

  @Version('1')
  @Post()
  async create(
    @Body() createWorkHistoryDto: CreateWorkHistoryDto,
  ): Promise<Response> {
    try {
      const result: WorkHistory =
        await this.workHistoryService.create(createWorkHistoryDto);
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
      const result = await this.workHistoryService.findAll();
      return Response.success(HttpStatus.OK, 'Data has been found', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Response> {
    try {
      const result: WorkHistory = await this.workHistoryService.findOne(id);
      return Response.success(HttpStatus.OK, 'Data has been found', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkHistoryDto: UpdateWorkHistoryDto,
  ): Promise<Response> {
    try {
      const result = await this.workHistoryService.update(
        id,
        updateWorkHistoryDto,
      );
      return Response.success(HttpStatus.OK, 'Data has been updated', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Response> {
    try {
      const result = await this.workHistoryService.remove(id);
      return Response.success(HttpStatus.OK, 'Data has been deleted', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }
}
