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

  it('returns false if starting point is out of bounds', () => {
    const matrix = [
      [1, 1],
      [1, 1],
    ];
    expect(walkFigure(matrix, { x: -1, y: 0 }, seen)).toBe(false);
    expect(walkFigure(matrix, { x: 2, y: 0 }, seen)).toBe(false);
    expect(walkFigure(matrix, { x: 0, y: 2 }, seen)).toBe(false);
  });

  it('returns false if cell already seen', () => {
    const matrix = [
      [1, 1],
      [1, 1],
    ];
    seen[0][0] = true;
    expect(walkFigure(matrix, { x: 0, y: 0 }, seen)).toBe(false);
  });

  it('returns false and marks seen if cell is falsy', () => {
    const matrix = [
      [0, 1],
      [1, 1],
    ];
    expect(walkFigure(matrix, { x: 0, y: 0 }, seen)).toBe(false);
    expect(seen[0][0]).toBe(true);
    expect(seen[0][1]).toBe(false);
    expect(seen[1][0]).toBe(false);
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
});
