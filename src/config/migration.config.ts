import { Article } from '../articles/entities/article';
import { DataSource } from 'typeorm';
import 'dotenv/config';
import { User } from '../users/entities/user';


export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3000'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Article, User],
  synchronize: false,
  migrations: [__dirname + '/../migrations/*.ts'],
});
