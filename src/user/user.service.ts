import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  
  create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    console.log("Hhhh")
    return user.save();
  }

  findAll() {
    return this.userModel.find({});
  }

  findOne(id: string) {
    return this.userModel.findById({_id:id});
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate({
      _id:id,
    },
    {
    "$et": updateUserDto,
    },{new:true});
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id:id}).exec();
  }
}
