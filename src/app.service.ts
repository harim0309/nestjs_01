// AppController가 사용할 비즈니스 로직 ( 서비스 )
// 간단한 반환용 메서드, 실무에선 거의 안 씀

import { Injectable } from '@nestjs/common';

@Injectable() // "이 클래스는 다른 데서 꺼내 쓸 수 있게 등록할게요~" 라는 표시
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
