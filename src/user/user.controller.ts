import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
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
    store(@Req() req: Request) {
        return this.userService.create(req)
    }

    @Patch('/:userId')
    update(@Req() req: Request, @Param() param: { userId: number}) {
        return this.userService.update(req, param)
    }

    @Get('/:userId')
    getUser(@Param() param: { userId: number}) {
        return this.userService.show(param)
    }

    @Delete('/:userId')
    deleteUser(@Param() param: { userId: number }) {
        return this.userService.delete(param)
    }
}
