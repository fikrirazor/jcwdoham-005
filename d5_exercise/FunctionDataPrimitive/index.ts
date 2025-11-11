//
let inputData = [1,"ar",3,true]


function dataPrimitiveIdentifier(inputData){
    let output = [];
    for(let arr in inputData){
        output.push(typeof(inputData[arr]));
    }

    console.log(output);
}

dataPrimitiveIdentifier(inputData);