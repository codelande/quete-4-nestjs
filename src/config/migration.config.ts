import { Article } from '../articles/entities/article';
import { DataSource } from 'typeorm';
import 'dotenv/config';


export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3000'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Article],
  synchronize: false,
  migrations: [__dirname + '/../migrations/*.ts'],
});
