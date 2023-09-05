import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository){}
    async createUser(createUserDto:CreateUserDto):Promise<User>{
        const {username, password, email} = createUserDto;
        const user = new User()
        user.email = email;
        user.username = username;
        user.password = password;
        return this.userRepository.save(user)
    }
    async getAllUser():Promise<User[]>{
        return this.userRepository.find()
    }
}
