import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserModule } from '../../../common/user/user.module';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UserController],
      imports: [UserModule],
    }).compile();
  });

  describe('login', async () => {
    it('should return 401 error"', async () => {
      const userController = app.get<UserController>(UserController);
      try {
        await userController.login({ email: 'wrongemail@test.ru', password: '123123'});
      } catch (error) {
        const { message, status } = error;
        expect(message).toEqual({ statusCode: 401, error: 'Unauthorized' });
        expect(status).toBe(401);
      }
    });
    it('should return token"', async () => {
      const userController = app.get<UserController>(UserController);
      const { token } = await userController.login({ email: 'admin@admin.ru', password: '12345678'});
      expect(token.length).toBe(32);
      },
    );
  });
});
