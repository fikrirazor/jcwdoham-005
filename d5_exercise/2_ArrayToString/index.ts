function convertArrayToString(arrayWord){
    let outputWord = "";
    for(let word = 0; word < arrayWord.length; word++){
        
        if(word == arrayWord.length - 1){
            outputWord += "and " + arrayWord[word] + '"';
        } else if(word != 0){
            outputWord += arrayWord[word] + ", ";
        } else {
            outputWord += '"' + arrayWord[word] + ", ";
        }
    }
    return outputWord;
}
let arrayWord = ["apple", "banana", "cherry", "date"];

console.log(convertArrayToString(arrayWord));