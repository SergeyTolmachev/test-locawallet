import { Injectable } from '@nestjs/common';
import { User } from './user';
import { UserTokenService } from './token/user-token.service';
import { UserToken } from './token/user-token';

@Injectable()
export class UserService {
  private users = [
    new User('admin@admin.ru', '12345678'),
    new User('user@user.ru', '87654321'),
  ];

  constructor(
    private readonly userTokenService: UserTokenService,
  ) {}

  auth(email: string, password: string): UserToken {
    const user = this.users.find(item => {
      return item.email === email;
    });
    if (!user || user.password !== password) {
      return null;
    }
    return this.userTokenService.getToken();
  }
}
