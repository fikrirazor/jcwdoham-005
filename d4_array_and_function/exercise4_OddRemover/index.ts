function oddRemover(arrNumber){
    let temp = []
    for(let z in arrNumber){
        if(z % 2 != 0){
            temp.push(arrNumber[z]);
        }
    }

    console.log(temp);
}
let arrNumber = [1,2,3,4,5,6,7,8,9,10];

oddRemover(arrNumber);