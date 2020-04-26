import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () =>
      mongoose.connect('mongodb://tasks-mongo-db/tasks'),
  },
];
