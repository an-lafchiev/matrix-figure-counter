import { countFigures } from '../src/countFigures.js';
import { it, expect, describe } from 'vitest';

describe('should count total number of figures', () => {
  it('returns 0 for empty matrix', () => {
    expect(countFigures([])).toBe(0);
    expect(countFigures([[]])).toBe(0);
  });

  it('returns 0 for matrix with only falsy values', () => {
    const matrix = [
      [0, 0],
      [0, 0],
    ] as const;
    expect(countFigures(matrix)).toBe(0);
  });

  it('returns 1 for single truthy cell', () => {
    const matrix = [
      [0, 0],
      [0, 1],
    ] as const;
    expect(countFigures(matrix)).toBe(1);
  });

  it('counts connected regions correctly (numbers)', () => {
    const matrix = [
      [1, 1, 0],
      [0, 1, 0],
      [0, 0, 1],
    ] as const;

    expect(countFigures(matrix)).toBe(2);
  });

  it('counts figures with booleans', () => {
    const matrix = [
      [1, 0],
      [0, 1],
    ] as const;
    expect(countFigures(matrix)).toBe(2);
  });

  it('counts all truthy cells as one figure when fully connected', () => {
    const matrix = [
      [1, 1],
      [1, 1],
    ] as const;
    expect(countFigures(matrix)).toBe(1);
  });

  it('handles non-rectangular matrices (ragged)', () => {
    const matrix = [[1], [0, 1], [1, 1, 1]] as const;
    expect(countFigures(matrix)).toBe(0);
  });

  it('works with large matrices', () => {
    const size = 50;
    const matrix = Array(size)
      .fill(null)
      .map(() => Array(size).fill(1));
    expect(countFigures(matrix)).toBe(1); // all connected
  });
});
