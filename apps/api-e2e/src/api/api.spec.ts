import axios from 'axios';

describe('GET /api/health', () => {
  it('should return a message', async () => {
    const response = await axios.get(`/api/health`);

    expect(response.status).toBe(200);
    expect(response.data).toEqual({ message: 'API is healthy' });
  });
});
