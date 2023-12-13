import readlineSync from "readline-sync";
import { getNumber, greeting, goodbye, win } from "../src/index.js";

export const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

export const isNumberPrime = () => {
  greeting();
  console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");
  let i = 0;
  while (i < 3) {
    let numToShow = getNumber(100);
    console.log(numToShow);
    let answer = readlineSync.question("Your answer: ");
    let result = primeNumbers.includes(numToShow) ? "yes" : "no";
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
