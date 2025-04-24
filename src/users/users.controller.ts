// ✅ 요청 처리 담당 (라우터 역할)
// /users/signup 같은 요청을 받아서 서비스로 전달

// src/users/users.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() body: { username: string; password: string }) {
    return this.usersService.create(body.username, body.password);
  }
}
