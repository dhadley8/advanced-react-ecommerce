import { describe, it, expect } from 'vitest';
import { fetchData, postData } from './api';

describe('API Service', () => {
    it('should fetch data successfully', async () => {
        const data = await fetchData('/api/test');
        expect(data).toBeDefined();
        expect(data).toHaveProperty('id');
    });

    it('should post data successfully', async () => {
        const response = await postData('/api/test', { name: 'test' });
        expect(response).toBeDefined();
        expect(response).toHaveProperty('success', true);
    });
});