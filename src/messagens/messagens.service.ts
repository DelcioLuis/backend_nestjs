import { Injectable } from '@nestjs/common';
import { CreateMessagenDto } from './dto/create-messagen.dto';
import { UpdateMessagenDto } from './dto/update-messagen.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Messagen, MessagenDocument } from './entities/messagen.entity';
import { Model } from 'mongoose';

@Injectable()
export class MessagensService {

  constructor(@InjectModel(Messagen.name) private userModel: Model<MessagenDocument>) {}

  create(createMessagenDto: CreateMessagenDto) {
    return 'This action adds a new messagen';
  }

  findAll() {
    return `This action returns all messagens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messagen`;
  }

  update(id: number, updateMessagenDto: UpdateMessagenDto) {
    return `This action updates a #${id} messagen`;
  }

  remove(id: number) {
    return `This action removes a #${id} messagen`;
  }
}
