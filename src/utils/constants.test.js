import { describe, it, expect } from 'vitest';
import { CONSTANT_ONE, CONSTANT_TWO } from './constants';

describe('Constants', () => {
    it('should have the correct value for CONSTANT_ONE', () => {
        expect(CONSTANT_ONE).toBe('expectedValue1');
    });

    it('should have the correct value for CONSTANT_TWO', () => {
        expect(CONSTANT_TWO).toBe('expectedValue2');
    });
});