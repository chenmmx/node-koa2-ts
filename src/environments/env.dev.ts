import { ConnectionOptions } from 'typeorm';

export const db: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'abc123456',
  database: 'test-db',
  logging: true,
  timezone: '+08:00',
  dateStrings: true,
  entities: ['../**/*.entity.ts']
};
