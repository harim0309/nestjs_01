// ✅ DB 테이블 구조 정의 (ORM 모델 : Object Relational Mapping )
// MySQL의 users 테이블을 코드로 표현한 것. @Entity() 데코레이터 사용
// 이 클래스를 기반으로 테이블을 생성함

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // 이 클래스는 DB 테이블로 매핑된다는 뜻
export class User {
  @PrimaryGeneratedColumn() // DB 테이블의 각 컬럼을 정의 & 기본 키 + 자동 증가
  id: number;

  @Column({ unique: true }) // 일반 컬럼
  username: string;

  @Column()
  password: string;
}
