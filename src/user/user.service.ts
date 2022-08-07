import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    get(): Promise<User[]> {
        return this.usersRepository.find();
    }

    create(createUserDto: CreateUserDto) {
        return this.usersRepository.save(createUserDto)
    }

    update(updateUserDto: UpdateUserDto, id: number) {
        return this.usersRepository.update(id, updateUserDto)
    }

    show(id: number): Promise<User> {
        return this.usersRepository.findOne({where: {id}})
    }

    findByEmail(email:string): Promise<User> {
        return this.usersRepository.findOne({where: { email }})
    }

    delete(id: number) {
        return this.usersRepository.delete(id)
    }
}
