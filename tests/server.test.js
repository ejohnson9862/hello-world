const request = require('supertest');
const { app, startServer } = require('../server');

let server;

beforeAll(async () => {
    server = startServer(); // Start the server before all tests
});

afterAll(async () => {
    server.close(); // Close the server after all tests
});

describe('GET /', () => {
    it('should return Hello World', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World');
        expect(response.status).toBe(200);
    });
});
