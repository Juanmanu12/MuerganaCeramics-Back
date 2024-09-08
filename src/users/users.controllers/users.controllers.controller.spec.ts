import { Test, TestingModule } from '@nestjs/testing';
import { UsersControllers } from './users.controllers.controller';

describe('UsersControllers', () => {
  let controller: UsersControllers;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersControllers],
    }).compile();

    controller = module.get<UsersControllers>(UsersControllers);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
