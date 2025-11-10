// BMI = BMI = weight (kg) / (height (meter))**2

let weight:number = 20; // kg
let height:number = 158; //meters

let BMI:number = weight / (height**2);

if(BMI <= 18.5){
    console.log("less weight");
} else if (BMI <= 24.9){
    console.log("ideal");
} else if (BMI <= 29.9){
    console.log("overweight");
} else if (BMI <= 39.9){
    console.log("very overweight");
} else {
    console.log("obesity")
}