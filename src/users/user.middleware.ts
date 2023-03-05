import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class UserMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        let url = req.url;
        let method = req.method;
        let date = new Date().toDateString();
        console.log(`request coming from ${url}, method is ${method} on ${date}`)
        next()
    }

}