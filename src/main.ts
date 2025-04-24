// NestJS 서버의 진입점(시작 파일)

// src/main.ts

import * as crypto from 'crypto';
(global as any).crypto = crypto;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 앱 전체를 AppModule 기준으로 시작함 ( 여기서 말하는 AppModule이 실제로 전체 설정, 모듈 연결을 담당하는 핵심 )
  await app.listen(3080);
}
bootstrap();
