import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/entities/user';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(@Body() user: User) {
      return this.authService.register(user);
    }

    @Post('login')
    login(@Body() user: User) {
      return this.authService.login(user);
    }

}
