import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
    controllers: [AuthController],
    // import UserModule and all assoticated controllers/services in order for it to use those internal paths
    imports: [UserModule, PassportModule],
    providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
