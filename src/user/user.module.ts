import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  // need to export UserService so that other paths can use the services here like auth
  exports: [UserService],
  imports: [TypeOrmModule.forFeature([User])]
})
export class UserModule {}
