import * as randomstring from 'randomstring';
import { Injectable } from '@nestjs/common';
import { UserToken } from './user-token';

@Injectable()
export class UserTokenService {
  getToken(): UserToken {
    return new UserToken(randomstring.generate());
  }
}
