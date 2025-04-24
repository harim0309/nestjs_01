// ✅ 비즈니스 로직 담당
// 실제 DB 저장, 조회, 수정 등의 로직 처리. 컨트롤러에서는 이걸 호출함

// src/users/users.service.ts

import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async create(username: string, password: string): Promise<User> {
    const existing = await this.usersRepo.findOne({ where: { username } });
    if (existing) {
      throw new ConflictException('이미 존재하는 사용자명입니다.');
    }

    const user = this.usersRepo.create({ username, password });
    return this.usersRepo.save(user);
  }
}
