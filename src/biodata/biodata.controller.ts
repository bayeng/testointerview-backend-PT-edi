import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  Version,
} from '@nestjs/common';
import { BiodataService } from './biodata.service';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';
import { Response } from '../helper/response';
import { AuthService } from '../auth/auth.service';
import { RbacGuard } from '../auth/guard/rbac.guard';
import { QueryBiodatumDto } from './dto/query-biodatum.dto';
import { Roles } from '../auth/decorator/auth.decorator';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Biodatum } from './entities/biodatum.entity';

@ApiTags('biodata')
@UseGuards(RbacGuard)
@Controller('biodata')
export class BiodataController {
  constructor(
    private readonly biodataService: BiodataService,
    private authService: AuthService,
  ) {}

  @Version('1')
  @Get('search')
  async findByQuery(@Query() query: QueryBiodatumDto): Promise<Response> {
    try {
      console.log('j');
      const result = await this.biodataService.findByQuery(query);
      return Response.success(HttpStatus.OK, 'Success get all biodata', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: Biodatum,
  })
  @Post()
  async create(
    @Body() createBiodatumDto: CreateBiodatumDto,
  ): Promise<Response> {
    try {
      const result = await this.biodataService.create(createBiodatumDto);
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
  @UseGuards(RbacGuard)
  @Roles('admin')
  @Get()
  async findAll(): Promise<Response> {
    try {
      const result = await this.biodataService.findAll();
      return Response.success(HttpStatus.OK, 'Success get all biodata', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Response> {
    try {
      const result = await this.biodataService.findOne(id);
      return Response.success(HttpStatus.OK, 'Success get biodata', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBiodatumDto: UpdateBiodatumDto,
  ): Promise<Response> {
    try {
      const result = await this.biodataService.update(id, updateBiodatumDto);
      return Response.success(HttpStatus.OK, 'Success update biodata', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }

  @Version('1')
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Response> {
    try {
      const result = await this.biodataService.remove(id);
      return Response.success(HttpStatus.OK, 'Success delete biodata', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }
}
