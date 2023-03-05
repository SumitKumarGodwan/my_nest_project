import { NestFactory } from '@nestjs/core';
import { NextFunction } from 'express';
import { RootModule } from './root.module';

// Global MiddleWare
let num = 0
function globalMiddleWare(req: Request, res: Response, next: NextFunction) {
  num = num +1
  console.log(num)
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  
  app.use(globalMiddleWare)
  await app.listen(3000);
}
bootstrap();
