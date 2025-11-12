// Write a function to get the lowest, highest and average value in the array (with and without sort function).

// With Sort

// Without Sort
function getLowestHighestAverage(arrayNumber: Array<number>) {
  let lowest = 0;
  let highest = 0;
  let avarage = 0;
  let new_arr = [];
  let l = arrayNumber.length;
  
  let sum = 0;
  for (let i = 0; i <= l; i++) {
    if (i != l) {
      sum += arrayNumber[i];
    }
    // sort array
    for (let j = 0; j <=l; j++) {
      if (arrayNumber[i] < arrayNumber[j]) {
        new_arr = arrayNumber[i];
        arrayNumber[i] = arrayNumber[j];
        arrayNumber[j] = new_arr;
      }
      lowest = arrayNumber[0];
      highest = arrayNumber[l - 1];
      avarage = sum / l;
    }
  }
  return { lowest, highest, avarage };
}

// output : {lowest : 4, highest: 45, average: 19.8xxx}
let arr = [12, 5, 23, 18, 4, 45, 32];

let { lowest, highest, avarage } = getLowestHighestAverage(arr);
console.log(`{lowest: ${lowest}, highest: ${highest}, average: ${avarage}}`);
