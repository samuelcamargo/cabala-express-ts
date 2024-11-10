import request from 'supertest';
import app from '../src/app';

describe('GET /cabala', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/cabala');
    expect(response.status).toBe(200);
  });
});