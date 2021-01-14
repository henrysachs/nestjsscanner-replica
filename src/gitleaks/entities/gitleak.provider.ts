import { Connection } from 'typeorm';
import { Gitleak } from './gitleak.entity';

export const gitleakProviders = [
  {
    provide: 'GITLEAK_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Gitleak),
    inject: ['DATABASE_CONNECTION'],
  },
];
