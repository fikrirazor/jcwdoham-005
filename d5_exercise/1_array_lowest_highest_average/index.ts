// Write a function to get the lowest, highest and average value in the array (with and without sort function).

// With Sort

function getLHAwithSort(arrayNumber: Array<number>){
    let l:number = arrayNumber.length;
    const sortedArray = arrayNumber.sort((a, b) => a - b);
    let lowest:number = sortedArray[0];
    let highest:number = sortedArray[l - 1];
    let sum:number = 0;
    for (let i = 0; i < l; i++) {
        sum += arrayNumber[i];
    }
    let average:number = sum / l;
    console.log(`Dengan Sort : {lowest: ${lowest}, highest: ${highest}, average: ${average}}`);
}

// Without Sort
function getLowestHighestAverage(arrayNumber: Array<number>) {
    let lowest:number = arrayNumber[0];
    let highest:number = arrayNumber[0];
    let sum:number = 0;
    let l:number = arrayNumber.length;
    let average:number = 0;
    for (let i = 0; i < l; i++) {
        sum += arrayNumber[i];
        
        if (arrayNumber[i] < lowest) {
            lowest = arrayNumber[i];
        }
        
        if (arrayNumber[i] > highest) {
            highest = arrayNumber[i];
        }
    }
    average = sum / l;
    console.log(`Tanpa Sort : {lowest: ${lowest}, highest: ${highest}, average: ${average}}`);
}


let arrb = [12, 5, 23, 18, 4, 45, 32];
getLHAwithSort(arrb);

// output : {lowest : 4, highest: 45, average: 19.8xxx}
let arr = [12, 5, 23, 18, 4, 45, 32];

getLowestHighestAverage(arr);



