// Create a function that can loop the number of times according to
// the input we provide, and will replace
// multiple of 3 with "Fizz", multiples of 5 with
// "Buzz", multiples of 3 and 5 with "FizzBuzz".
function loopNumberOfTime() {
  let outputMuncul = "";

  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      outputMuncul += 1;
      outputMuncul += " ";
    } else if (i % 3 == 0 && i % 5 == 0) {
      outputMuncul += "FizzBuzz";
      outputMuncul += " ";
    } else if (i % 3 == 0) {
      outputMuncul += "Fizz";
      outputMuncul += " ";
    } else if (i % 5 == 0) {
      outputMuncul += "Buzz";
      outputMuncul += " ";
    } else {
      outputMuncul += i;
      outputMuncul += " ";
    }
  }
  console.log(outputMuncul);
}

let n: number = 15;
loopNumberOfTime(n);