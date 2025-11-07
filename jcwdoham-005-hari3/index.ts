// Logical operator -> check multile condition in one row
let hasID: boolean = false;
let age: number = 25;

// condition -> user can entry the veneu if the has id and age 18+
if (hasID && age >= 18) {
  console.log("You can entry the veneu");
} else {
  console.log("You can't entry the veneu");
}