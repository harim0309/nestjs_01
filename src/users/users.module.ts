// ✅ NestJS 모듈 설정 파일
// 이 모듈에서 사용할 컨트롤러, 서비스, DB 연결을 등록함
// 테이블, 컨트롤러, 서비스가 서로 연결되도록 설정
// 관련된 파일들(컨트롤러, 서비스, 엔티티 등)을 하나로 묶어주는 폴더 단위 박스
// NestJS는 기능별로 코드 정리하는 구조야 (💡모듈 기반 구조)
// 커지면 파일 막 뒤죽박죽 되는데, Module로 딱 묶으면 관리가 쉬움

// src/users/users.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // forFeature는 이 모듈 안에서 UserRepository를 주입 가능하게 함
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
