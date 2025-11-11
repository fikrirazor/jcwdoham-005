function triangle(height:number){
    for(let i:number = 1; i <=height;i++){
    let baris = ' ';
    for(let j:number = 1; j <= i;j++){
        baris = baris + j + ' ';
    }
    console.log(baris);
    }
}

let height:number = 8;
triangle(8);