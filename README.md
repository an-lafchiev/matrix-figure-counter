[![npm version](https://img.shields.io/npm/v/matrix-figure-counter)](https://www.npmjs.com/package/matrix-figure-counter)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A lightning-fast TypeScript library that analyzes a two-dimensional matrix and returns the number
of contiguous "figures" formed by marked elements. A figure is a group of adjacent marked
cells connected orthogonally (i.e., via top, bottom, left, or right). Diagonal adjacency does not
count toward the same figure.

## Features

- 🚀 O(n2) time complexity
- 🔍 DFS traversal
- 📦 Zero dependencies

## Installation

```bash
npm install matrix-figure-counter
```

## Usage

```
import { countFigures } from 'matrix-figure-counter';

const matrix = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
];

console.log(countFigures(matrix));
// Output: 5
```
