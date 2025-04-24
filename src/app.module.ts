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
import { User } from './users/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
