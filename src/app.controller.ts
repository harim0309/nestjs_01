// 기본 루트 라우팅 (예: /) 용. 없어도 되지만 기본 scaffold에 포함됨
// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello from AppController!';
  }
}
