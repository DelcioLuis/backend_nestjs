import { Module } from '@nestjs/common';
import { MessagensService } from './messagens.service';
import { MessagensGateway } from './messagens.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Messagen, MessagenSchema } from './entities/messagen.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Messagen.name, schema: MessagenSchema }])],
  providers: [MessagensGateway, MessagensService]
})
export class MessagensModule {}
