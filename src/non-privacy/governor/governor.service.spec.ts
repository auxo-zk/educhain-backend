import { Test, TestingModule } from '@nestjs/testing';
import { GovernorService } from './governor.service';

describe('GovernorService', () => {
  let service: GovernorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GovernorService],
    }).compile();

    service = module.get<GovernorService>(GovernorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
