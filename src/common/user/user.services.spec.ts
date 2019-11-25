import { UserService } from './user.service';
import { UserTokenService } from './token/user-token.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService(new UserTokenService());
  });

  describe('auth', () => {
    it('auth wrong email', () => {
      const result = userService.auth('wrongtest@mail.ru', 'wrongpass');
      expect(result).toBe(null);
    });
    it('auth wrong password', () => {
      const result = userService.auth('admin@admin.ru', 'wrongpass');
      expect(result).toBe(null);
    });
    it('auth right data', () => {
      const { token } = userService.auth('admin@admin.ru', '12345678');
      expect(token.length).toBe(32);
    });
  });
});
