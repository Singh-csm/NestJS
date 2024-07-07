import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy} from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
    imports:[
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret:"seckey",
            signOptions:{ expiresIn: '10 days'}
        }),
    ],
    providers: [ AuthService, LocalStrategy, JwtStrategy],
    controllers: [ AuthController],
})


export class AuthModule {}