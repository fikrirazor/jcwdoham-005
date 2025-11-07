// factorial
// 4! = 4x3x2x1
// reverse looping

let factorial:number = 6;
let result:number = 1;
for(let i:number = factorial; i >= 1; i--){
    result *= i;
    
}
console.log(result)