import { walkFigure } from '../src/countFigures';
import { it, expect, describe, beforeEach } from 'vitest';

describe('should walk the figure', () => {
  let seen: boolean[][];

  beforeEach(() => {
    seen = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ];
  });

  it('returns false if matrix or seen row is missing', () => {
    expect(walkFigure([], { x: 0, y: 0 }, [])).toBe(false);
  });

  it('returns true and visits all connected truthy cells', () => {
    const matrix = [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 1],
    ];

    expect(walkFigure(matrix, { x: 0, y: 0 }, seen)).toBe(true);

    expect(seen[0][0]).toBe(true);
    expect(seen[0][1]).toBe(true);
    expect(seen[0][2]).toBe(true);
    expect(seen[1][0]).toBe(true);
    expect(seen[1][1]).toBe(true);
    expect(seen[2][0]).toBe(true);

    expect(seen[2][2]).toBe(false);
  });

  it('returns true and mark all orthogonally cells', () => {
    const matrix = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];

    expect(walkFigure(matrix, { x: 1, y: 1 }, seen)).toBe(true);

    expect(seen[1][1]).toBe(true);
    expect(seen[0][1]).toBe(true);
    expect(seen[1][0]).toBe(true);
    expect(seen[2][1]).toBe(true);
    expect(seen[1][2]).toBe(true);

    expect(seen[0][0]).toBe(false);
    expect(seen[0][2]).toBe(false);
    expect(seen[2][0]).toBe(false);
    expect(seen[2][2]).toBe(false);
  });
  it('works with large matrices', () => {
    const size = 1000;
    const matrix = Array.from({ length: size }, () => Array(size).fill(1));
    const seenLarge = Array.from({ length: size }, () =>
      Array(size).fill(false),
    );
    expect(walkFigure(matrix, { x: 0, y: 0 }, seenLarge)).toBe(true);
    expect(seenLarge.every((row) => row.every(Boolean))).toBe(true);
  });
});
