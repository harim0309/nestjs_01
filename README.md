## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

main.ts → AppModule을 기반으로 앱 실행 시작

AppModule은 UsersModule을 포함

UsersModule은 컨트롤러(UsersController)와 서비스(UsersService)를 연결

컨트롤러는 /users/signup으로 들어온 요청을 서비스로 넘김 ( 요청(Request)을 받고 응답(Response)을 보냄. 즉, "받고 전달하는 사람" 역할 )

서비스는 User 엔티티를 통해 DB에 저장함 (ORM)

결과를 다시 컨트롤러가 받아서 응답으로 전송
