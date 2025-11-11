/* Write a function that adds an element to the end of an array. However, the element should only be added if it is not
 already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

 */

function addValueToArray(arr, newElement) {
  let isAvailable = false;
  // Melakukan looping untuk mengecek apakah
  // element baru ada atau tidak
  for (let i = 0; i < arr.length; i++) {
    //console.log(isAvailable); //cek iterasi
    if (arr[i] == newElement) {
      isAvailable = true;
    } else {
      isAvailable = false;
    }

    // Memberhentikan iterasi jika ada
    if (isAvailable) {
      break;
    } else if (isAvailable == false && i == arr.length - 1) {
      arr.push(newElement);
    }
  }
  return arr;
}

let arr = [1, 2, 3, 4];

let newElement = 7;


console.log(addValueToArray(arr,newElement));
