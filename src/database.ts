import { createConnection, getConnectionOptions, Connection } from 'typeorm';

export const connectDatabase = async (): Promise<Connection> => {
  const options = await getConnectionOptions(process.env.NODE_ENV || 'default');
  return createConnection({ ...options, name: 'default' });
};