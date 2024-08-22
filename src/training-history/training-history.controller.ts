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
} from '@nestjs/common';
import { TrainingHistoryService } from './training-history.service';
import { CreateTrainingHistoryDto } from './dto/create-training-history.dto';
import { UpdateTrainingHistoryDto } from './dto/update-training-history.dto';
import { Response } from '../helper/response';
import { TrainingHistory } from './entities/training-history.entity';

@Controller('training-history')
export class TrainingHistoryController {
  constructor(
    private readonly trainingHistoryService: TrainingHistoryService,
  ) {}

  @Version('1')
  @Post()
  async create(
    @Body() createTrainingHistoryDto: CreateTrainingHistoryDto,
  ): Promise<Response> {
    try {
      const result = await this.trainingHistoryService.create(
        createTrainingHistoryDto,
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
      const result = await this.trainingHistoryService.findAll();
      return Response.success(
        HttpStatus.OK,
        'Success get all training history',
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
      const result: TrainingHistory =
        await this.trainingHistoryService.findOne(id);
      return Response.success(HttpStatus.OK, 'Data has been found', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTrainingHistoryDto: UpdateTrainingHistoryDto,
  ): Promise<Response> {
    try {
      const result = await this.trainingHistoryService.update(
        id,
        updateTrainingHistoryDto,
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
      const result = await this.trainingHistoryService.remove(id);
      return Response.success(HttpStatus.OK, 'Data has been deleted', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }
}
