import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './articles/entities/article';
import { ConfigModule } from '@nestjs/config';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3000'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Article],
      synchronize: false,
    }),
    ArticlesModule
  ],
})
export class AppModule {}

