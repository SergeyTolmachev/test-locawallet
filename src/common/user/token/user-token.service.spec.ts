import { UserTokenService } from './user-token.service';

describe('UserService', () => {
  let userTokenService: UserTokenService;

  beforeEach(() => {
    userTokenService = new UserTokenService();
  });

  describe('getToken', () => {
    it('gettoken length', () => {
      const { token } = userTokenService.getToken();
      expect(token.length).toBe(32);
    });
  });
});
