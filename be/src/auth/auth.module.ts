import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ResetPasswordModule } from './reset-password/reset-password.module';

@Module({
  imports: [LoginModule, RegisterModule, ResetPasswordModule]
})
export class AuthModule {}
