// tests/users.test.js
const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  describe('GET /api/users', () => {
    it('should return all users', async () => {
      const res = await request(app).get('/api/users');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
    });
  });
  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const userData = {
        name: 'Test User',
        email: 'test@example.com'
      };
      const res = await request(app)
        .post('/api/users')
        .send(userData);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toBe(userData.name);
    });
    it('should validate request data', async () => {
      const invalidData = {
        email: 'not-an-email'
      };
      const res = await request(app)
        .post('/api/users')
        .send(invalidData);

      expect(res.statusCode).toBe(400);
    });
  });
});