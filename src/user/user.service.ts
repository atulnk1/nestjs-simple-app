import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    get() {
        return { name: "atul", email: "atul@gmail.com" }
    }

    create(req: Request) {
        return req.body
    }

    update(req: Request, param: {userId: number}) {
        return { body: req.body, param }
    }

    show(param: {userId: number}) {
        return param
    }

    delete(param: {userId: number}) {
        return param
    }
}
