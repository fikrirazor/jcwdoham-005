// find diameter,circumference & area of circle


// diamter
// input: r = 5
// process: diameter = 2r
//          diameter = 2 x r
// output: 10

let r:number = 5;
let diameter:number;

diameter = 2 * r

console.log("Diameter dari lingkaran adalah:",diameter);

// Keliling Lingkaran
// process: C = 2*phi*r
let circumference:number;

circumference = 2*Math.PI*r;

console.log("Keliling dari lingkaran adalah:",circumference)

// Luas Lingkaran
// process : phi*r**2

let areaC:number;

areaC = Math.PI*(r**2)

console.log("Luas lingkaran:",areaC)