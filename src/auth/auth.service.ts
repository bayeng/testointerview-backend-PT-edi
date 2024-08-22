import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async login(authDto: AuthDto) {
    const user = await this.userService.findOneByEmail(authDto.email);
    const isMatch = await bcrypt.compare(authDto.password, user.password);
    if (!isMatch)
      throw new HttpException(
        'Invalid email or password',
        HttpStatus.BAD_REQUEST,
      );

    const payload = { email: user.email, sub: user.id, isAdmin: user.isAdmin };
    return {
      access_token: await this.jwtService.signAsync(payload),
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    };
  }
}
