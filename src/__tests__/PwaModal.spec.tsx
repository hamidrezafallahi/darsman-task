import { sum } from '../components/layout/PwaModal';
// import { render } from '@testing-library/react';

describe('sum', () => {
    it('should return the sum of two numbers', () => {
      const result = sum(2, 3);
      expect(result).toBe(5);
    });
});