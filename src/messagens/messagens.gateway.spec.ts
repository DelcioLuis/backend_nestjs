import { Test, TestingModule } from '@nestjs/testing';
import { MessagensGateway } from './messagens.gateway';
import { MessagensService } from './messagens.service';

describe('MessagensGateway', () => {
  let gateway: MessagensGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagensGateway, MessagensService],
    }).compile();

    gateway = module.get<MessagensGateway>(MessagensGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
