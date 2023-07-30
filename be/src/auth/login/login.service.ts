import { Injectable } from '@nestjs/common';
import { Login } from '../auth.entity';

@Injectable()
export class LoginService {
    Login(login: Login) {
        const isLogin = login.userName === 'test' && login.password === '111111'
        let res = ''
        if (isLogin) res = 'đăng nhập thành công';
        else res = 'Bạn sai tên đăng nhập hoặc mật khẩu'
        return res;
    }
}
