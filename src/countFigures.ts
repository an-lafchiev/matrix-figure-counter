import type { AllowedValues, ReadonlyTwoDArray } from './types/index.js';

export const directions = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

export function walkFigure<T>(
  matrix: ReadonlyTwoDArray<T>,
  curr: { x: number; y: number },
  seen: boolean[][],
) {
  if (!matrix[0]) return false;
  if (
    curr.x < 0 ||
    curr.x >= matrix[0].length ||
    curr.y < 0 ||
    curr.y >= matrix.length
  ) {
    return false;
  }

  if (seen[curr.y][curr.x]) {
    return false;
  }

  if (!matrix[curr.y][curr.x]) {
    seen[curr.y][curr.x] = true;
    return false;
  }

  seen[curr.y][curr.x] = true;

  for (let i = 0; i < directions.length; i++) {
    const [dx, dy] = directions[i];
    walkFigure(matrix, { x: curr.x + dx, y: curr.y + dy }, seen);
  }

  return true;
}

export function countFigures<T extends AllowedValues>(
  matrix: ReadonlyTwoDArray<T>,
) {
  if (matrix.length === 0 || !matrix[0] || matrix[0].length === 0) {
    return 0;
  }

  const seen: boolean[][] = [];
  let figureCount = 0;

  for (let i = 0; i < matrix.length; i++) {
    seen.push(new Array(matrix[i]?.length).fill(false));
  }

  for (let y = 0; y < matrix.length; y++) {
    if (matrix.length !== matrix[y].length) break;

    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] && !seen[y][x]) {
        walkFigure<T>(matrix, { x, y }, seen);
        figureCount++;
      } else {
        seen[y][x] = true;
      }
    }
  }

  return figureCount;
}
