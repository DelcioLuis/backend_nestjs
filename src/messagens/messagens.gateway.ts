import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { MessagensService } from './messagens.service';
import { CreateMessagenDto } from './dto/create-messagen.dto';
import { UpdateMessagenDto } from './dto/update-messagen.dto';

@WebSocketGateway()
export class MessagensGateway {
  constructor(private readonly messagensService: MessagensService) {}

  @SubscribeMessage('createMessagen')
  create(@MessageBody() createMessagenDto: CreateMessagenDto) {
    return this.messagensService.create(createMessagenDto);
  }

  @SubscribeMessage('findAllMessagens')
  findAll() {
    return this.messagensService.findAll();
  }

  @SubscribeMessage('findOneMessagen')
  findOne(@MessageBody() id: number) {
    return this.messagensService.findOne(id);
  }

  @SubscribeMessage('updateMessagen')
  update(@MessageBody() updateMessagenDto: UpdateMessagenDto) {
    return this.messagensService.update(updateMessagenDto.id, updateMessagenDto);
  }

  @SubscribeMessage('removeMessagen')
  remove(@MessageBody() id: number) {
    return this.messagensService.remove(id);
  }
}
