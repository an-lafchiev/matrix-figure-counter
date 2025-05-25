export type BinaryValues = 0 | 1;
export type ReadonlyTwoDArray<T> = readonly (readonly T[])[];
export type AllowedValues = BinaryValues | boolean;
export type Point = { x: number; y: number };

export type Node<T> = {
  value: T;
  prev?: Node<T>;
};
