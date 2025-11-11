// Tujuan Mencari angka ke 2 paling kecil di dalam Array
// input : n = [5, 3, 1, 7, 2, 6]
// output : 2

function secondSmallestFinder(arrayNumber: Array<number>) {
  numbers.sort();
  let theSmallest: number;
  for (let i = 0; i <= numbers.length; i++) {
    if (i == 1) {
      theSmallest = numbers[i];
    }
  }
  return theSmallest;
}

let numbers = [5, 3, 1, 7, 2, 6];

console.log(`the smallest number from Array [${numbers}] is ${secondSmallestFinder(numbers)}`);