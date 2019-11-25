import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../../common/user/user.service';
import { User } from '../../../common/user/user';
import { UserToken } from '../../../common/user/token/user-token';

@Controller('v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post('login')
  login(@Body() body: User): UserToken {
    const { email, password } = body;
    const token = this.userService.auth(email, password);
    if (!token) {
      throw new UnauthorizedException();
    }
    return token;
  }
}
