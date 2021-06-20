import { Test, TestingModule } from '@nestjs/testing';
import { MessagensService } from './messagens.service';

describe('MessagensService', () => {
  let service: MessagensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagensService],
    }).compile();

    service = module.get<MessagensService>(MessagensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
