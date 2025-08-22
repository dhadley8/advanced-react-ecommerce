import { describe, it, expect } from 'vitest';
import { useApi } from './useApi';

describe('useApi', () => {
	it('should return data correctly', () => {
		const { result } = renderHook(() => useApi());
		expect(result.current.data).toBeDefined();
	});

	it('should handle errors correctly', () => {
		const { result } = renderHook(() => useApi());
		expect(result.current.error).toBeNull();
	});
});