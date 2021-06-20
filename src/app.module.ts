import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagensModule } from './messagens/messagens.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://delcciodev:delcciodev@paulinasource.x1op8.mongodb.net/PassBemAPP?retryWrites=true&w=majority'),
   MessagensModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

