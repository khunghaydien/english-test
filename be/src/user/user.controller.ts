import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Post()
    async createUser(@Body() createUserDto: CreateUserDto):Promise<User>{
        return this.userService.createUser(createUserDto);
    }
    @Get()
    async getAllUser():Promise<User[]>{
        return this.userService.getAllUser()
    }
}
