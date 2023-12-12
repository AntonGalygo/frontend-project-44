import readlineSync from "readline-sync";
import { getNumber, greeting, goodbye, win } from "../src/index.js";

let gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export const nod = () => {
  greeting();
  console.log("Find the greatest common divisor of given numbers.");
  let i = 0;
  while (i < 3) {
    let a = getNumber(15);
    let b = getNumber(20);
    console.log("Question: ", a, b);
    let result = gcd(a, b);
    let answer = readlineSync.question("Your answer: ");
    if (answer == result) {
      console.log("Correct!");
      i++;
    } else if (answer != result) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'`
      );
      goodbye();
      break;
    }
  }
  win(i);
};
