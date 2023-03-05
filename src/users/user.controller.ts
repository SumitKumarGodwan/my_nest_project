import { BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import path from "path";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    constructor(
        private userService: UserService
    ) {
        console.log("this is constructor")
    }

    @Post("add-user")
    async addUser() {
        return this.userService.addUser();
    }

    @Get("/:entityId")
    async getUserData(@Param('entityId', ParseIntPipe) entityId: number) {
        return this.userService.getUserData(entityId);
    }

    @Get("getExceptions")
    async getExceptions() {
        throw new BadRequestException();
    }
}