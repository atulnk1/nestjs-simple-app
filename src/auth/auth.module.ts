import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';

@Module({
    controllers: [AuthController],
    // import UserModule and all assoticated controllers/services in order for it to use those internal paths
    imports: [UserModule]
})
export class AuthModule {}
