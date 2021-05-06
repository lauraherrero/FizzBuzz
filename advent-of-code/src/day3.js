// 1. Contar cuál es el ancho y alto del map
// 2. Calcular cuantas veces tienes que multiplicar el ancho para poder llegar hasta el final.
// 3. Número de líneas * Número de movimientos hacia la dcha (ancho) de la línea
// 4. Crear matrix, For (i) line = map[i] || matrix[i] = line.repeat()

import { readFileSync } from 'fs';

const map = readFileSync('./src/inputDay3.txt', 'utf8').split('\n'); // Reads the values

const MOVEMENT_DOWN = 1;
const MOVEMENT_RIGHT = 3;
const width = map[0].length;
const height = map.length;

let row = MOVEMENT_DOWN;
let column = MOVEMENT_RIGHT;

let numberOfTrees = 0;

while (row < height) {
  const location = map[row][column];
  if (location === '#') {
    numberOfTrees++;
  }

  column = (column + MOVEMENT_RIGHT) % width;
  row += MOVEMENT_DOWN;
}

console.log(numberOfTrees); // eslint-disable-line no-console
