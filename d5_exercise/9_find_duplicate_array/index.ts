/*
Write a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
*/

function find_duplicate_array(arr: Array<number>){
    let arr_duplicate = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr_duplicate.push(arr[i]);
            }
        }
    }
    return arr_duplicate;
}

let arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];

const output = find_duplicate_array(arr);

console.log(output);