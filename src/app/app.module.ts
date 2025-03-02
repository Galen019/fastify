import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mydatabase'), // Replace with your DB name
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
