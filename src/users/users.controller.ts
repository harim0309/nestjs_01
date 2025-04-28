// ✅ HTTP 요청 처리 담당 (라우터 역할)
// /users/signup 같은 요청을 받아서 서비스로 전달
// 요청(Request)을 받고 응답(Response)을 보냄. 즉, "받고 전달하는 사람" 역할

// src/users/users.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
// /users로 들어오는 요청 처리
// 요청을 받는 진입점(라우터)**임을 선언
// 이 클래스의 모든 메서드는 /users로 시작하는 URL에서 작동
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // "등록된 거 꺼내서 쓸게요~"

  @Post('signup') // /users/signup POST 요청 처리
  // /users/signup으로 들어오는 POST 요청 받음
  async signup(@Body() body: { username: string; password: string }) {
    // POST body에서 값 추출
    // body에서 username, password 꺼냄
    return this.usersService.create(body.username, body.password); // 서비스에 맡김 (usersService.create 호출)
  }
}
