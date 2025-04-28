// ✅ 비즈니스 로직 담당
// 실제 DB 저장, 조회, 수정 등의 로직 처리. 컨트롤러에서는 이걸 호출함

// src/users/users.service.ts

import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable() // 의존성 주입 대상임을 표시 & "이 클래스는 다른 데서 꺼내 쓸 수 있게 등록할게요~" 라는 표시
export class UsersService {
  constructor(
    @InjectRepository(User) // 이걸 통해 TypeORM의 users 테이블에 접근 가능 & TypeORM의 Repository 객체를 서비스 안에 의존성 주입해줌
    private usersRepo: Repository<User>,
  ) {}

  async create(username: string, password: string): Promise<User> {
    // 이미 존재하는지 검사
    const existing = await this.usersRepo.findOne({ where: { username } });
    if (existing) {
      throw new ConflictException('이미 존재하는 사용자명입니다.');
    }

    // 새 유저 생성
    const user = this.usersRepo.create({ username, password });
    return this.usersRepo.save(user);
  }
}
