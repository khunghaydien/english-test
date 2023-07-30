import { Controller, Get } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private readonly LoginService: LoginService) { }

    @Get()
    Login() {
        const login = {
            userName: 'aaa',
            password: '111111'
        }
        const loginStatus = this.LoginService.Login(login);
        return loginStatus
    }
}
