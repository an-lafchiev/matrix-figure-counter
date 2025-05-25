import Stack from './stackList.js';
import type { AllowedValues, Point, ReadonlyTwoDArray } from './types/index.js';

export const directions = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

export function walkFigure<T>(
  matrix: ReadonlyTwoDArray<T>,
  start: Point,
  seen: boolean[][],
) {
  if (!matrix[0]) return false;

  const stack = new Stack<Point>();
  stack.push(start);

  const matrixHeight = matrix.length;
  const matrixWidth = matrix[0].length;

  while (stack.length > 0) {
    const { x, y } = stack.pop() as Point;

    if (x < 0 || x >= matrixWidth || y < 0 || y >= matrixHeight) continue;
    if (seen[y][x]) continue;

    seen[y][x] = true;

    if (!matrix[y][x]) continue;

    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      stack.push({ x: x + dx, y: y + dy });
    }
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
