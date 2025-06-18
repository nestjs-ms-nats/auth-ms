import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth.register.user')
  registernUser() {
    return 'Register User';
  }

  @MessagePattern('auth.login.user')
  loginUser() {
    return 'Login User';
  }

  @MessagePattern('auth.verifyToken.user')
  verifyTokenUser() {
    return 'Verify Token User';
  }
}
