// 전체 앱의 모듈 설정 파일
// DB 연결

// ConfigModule.forRoot({ isGlobal: true })	.env 사용할 수 있도록 설정
// TypeOrmModule.forRootAsync({...})	DB 연결정보를 ConfigService에서 가져옴
// entities: [User]	User 엔티티가 테이블 생성 대상이라는 뜻
// synchronize: true	코드로 테이블 자동 생성 (개발용)

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  // 이 클래스는 NestJS 모듈임을 나타냄
  imports: [
    // 각각의 도메인 모듈들을 여기에 등록함
    ConfigModule.forRoot({
      isGlobal: true, // 모든 모듈을 한 번에 가져와서 import 가능
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '0309',
        database: 'nestjs_test_01',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController], // 루트 수준 라우터 설정
  providers: [AppService], // 애플리케이션 전역에서 사용할 서비스
})
export class AppModule {}
