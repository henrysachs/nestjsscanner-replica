import { Test, TestingModule } from '@nestjs/testing';
import { GitleaksController } from './gitleaks.controller';
import { GitleaksService } from './gitleaks.service';

describe('GitleaksController', () => {
  let controller: GitleaksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GitleaksController],
      providers: [GitleaksService],
    }).compile();

    controller = module.get<GitleaksController>(GitleaksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
