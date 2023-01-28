import { app } from '../src/app';

import supertest from 'supertest';

const server = supertest(app);

describe('testando /status', () => {
  it('test', async () => {
    const res = await server.get('/status');

    expect(res.status).toBe(200);

  });
});
