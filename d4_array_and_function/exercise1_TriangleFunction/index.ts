// Topic: Array & Function
// Exercise 01
// 01. Triangle Pattern
// input -> height:number
// output -> triangle pattern

function trianglePattern(height:number){
    let a:number = 1;
    for(let i:number = 1; i <=height;i++){
    let baris = ' ';
        for(let j:number = 1; j <= i;j++){
            
            if(a<10){
                baris = baris + "0" + a + ' ';
            } else {
                baris = baris + a + ' ';
            }
            a++;
        }
        console.log(baris);
    }
}
let height:number = 8;
trianglePattern(8);

/*
function printTrianglePattern(height:number):void {
    let printedNumber:number = 1;
    for (let row = 0; row < height; row ++){
     console.log(row);
    }
}
    printTrianglePattern(4)
*/

/*
function printTrianglePattern(height:number):void {
    let printedNumber:number = 1;
    let result: string = "";
    for (let row = 0; row < height; row++){
     for (let col = 0; col <= row; col++){
        result =+ col + " ";
     }
        result += "\n"
    }
    return result;
}
    console.log(printTrianglePattern(4))
*/

/*
function printTrianglePattern(height:number):void {
    let printedNumber:number = 1;
    let result: string = "";
    for (let row = 1; row <= height; row++){
     for (let col = 1; col <= row; col++){
        result += printedNumber + " ";
        printedNumber++;
    }
        result += "\n"
    }
    return result;
}
    console.log(printTrianglePattern(4))
*/