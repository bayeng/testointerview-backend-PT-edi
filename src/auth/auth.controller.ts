import { Body, Controller, HttpStatus, Post, Version } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Response } from '../helper/response';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Version('1')
  @Post('login')
  async login(@Body() authDto: AuthDto) {
    try {
      const result = await this.authService.login(authDto);
      return Response.success(HttpStatus.OK, 'Success login', result);
    } catch (error) {
      throw Response.error(error.status, error.message);
    }
  }
}
