import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from './tokens.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { OtpEntity } from '../user/entities/otp.entity';
import { ProfileEntity } from '../user/entities/profile.entity';
import { GoogleAuthController } from './google.controller';
import { GoogleStrategy } from './strategy/google.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, OtpEntity, ProfileEntity])],
  // controllers: [AuthController, GoogleAuthController],
  // providers: [AuthService, JwtService, TokenService, GoogleStrategy],
  // exports: [AuthService, JwtService, TokenService, TypeOrmModule, GoogleStrategy],
  controllers: [AuthController],
  providers: [AuthService, JwtService, TokenService],
  exports: [AuthService, JwtService, TokenService, TypeOrmModule],
})
export class AuthModule {}
 