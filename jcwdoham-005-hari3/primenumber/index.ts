let isPrimeNumber:number = 7;

if( isPrimeNumber <= 1){
    console.log("Is Prime NUmber", false)
}

for (let i = 2; i < isPrimeNumber; i++){
    if(isPrimeNumber % i == 0){
        console.log("Is Prime NUmber", false)
    }
}