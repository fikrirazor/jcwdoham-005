function arrayCalculatorForEach(array1: Array<number>, array2: Array<number>) {
  let outputCalculation: Array<number> = [];
  for (let i: number = 0; i < array1.length; i++) {
    let x = array1[i] + array2[i];
    outputCalculation.push(x);
  }
  return outputCalculation;
}
let array1: Array<number> = [1, 2, 3];
let array2: Array<number> = [3, 2, 1];

console.log(arrayCalculatorForEach(array1, array2));
