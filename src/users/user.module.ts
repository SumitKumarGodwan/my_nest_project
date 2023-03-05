import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserMiddleware } from './user.middleware';
import { UserService } from './user.service';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports: []
})
export class UserModule implements NestModule{
  constructor() {
    console.log("Usr module")
  }
  configure(consumer: MiddlewareConsumer) {
    // Register middleware
    consumer.apply(UserMiddleware).forRoutes("user")
  }
}
