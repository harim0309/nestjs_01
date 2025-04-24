// ✅ DB 테이블 구조 정의 (ORM 모델)
// MySQL의 users 테이블을 코드로 표현한 것. @Entity() 데코레이터 사용

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
}
