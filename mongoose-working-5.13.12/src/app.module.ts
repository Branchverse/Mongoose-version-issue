import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env']
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      uri: configService.get<string>('DB_URI'),
      autoIndex: true
    }),
    inject: [ConfigService]
  }), 
  CatsModule
  ]

})

export class AppModule { }
