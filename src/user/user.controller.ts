import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    // this is called dependency injection which is handled by nest to inject the dependencies for this controller automatically
    constructor(private userService: UserService){}

    @Get()
    getUsers() {
        return this.userService.get()
    }

    @Post() 
    // @Body decorator ensures that only the Request Body is taken in with the correct Data Transfer Object Format
    store(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Patch('/:userId')
    // Validation Pipe to ensure that the parameter being passed here can only be of type int 
    update(@Body() updateUserDto: UpdateUserDto, @Param('userId', ParseIntPipe) userId: number) {
        return this.userService.update(updateUserDto, userId)
    }

    @Get('/:userId')
    
    getUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.show(userId)
    }

    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number ) {
        return this.userService.delete(userId)
    }
}
