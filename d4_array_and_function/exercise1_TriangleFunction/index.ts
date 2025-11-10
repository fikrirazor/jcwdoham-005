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