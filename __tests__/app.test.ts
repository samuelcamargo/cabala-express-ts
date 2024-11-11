import request from 'supertest';
import app from '../src/app';
import { connectDatabase } from '../src/database';
import { Connection } from 'typeorm';

let connection: Connection;

beforeAll(async () => {
  process.env.NODE_ENV = 'test';
  connection = await connectDatabase();
});

afterAll(async () => {
  await connection.close();
});

describe('GET /cabala', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/cabala');
    expect(response.status).toBe(200);
  });
});