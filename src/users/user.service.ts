import { Injectable, Post } from "@nestjs/common";

@Injectable()
export class UserService{
    constructor() {
        console.log("this is user services")
    }
    
    async addUser() {
        return "user added"
    }

    async getUserData(entityId: number) {
        return "get user data"
    }
}