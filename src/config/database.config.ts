import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../api/natural-language-query-agent/entities/user.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'userdb',
  entities: [User],
  synchronize: true,
  migrations: ['src/migrations/*.ts'],
  migrationsRun: false,
  migrationsTableName: 'migrations',
}; 