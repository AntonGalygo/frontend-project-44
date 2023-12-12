import readlineSync from "readline-sync";
import { name, getNumber, greeting, goodbye, win } from "../src/index.js";

export const getSign = () => {
  const sings = ["+", "-", "*"];
  const count = Math.floor(Math.random() * 3);
  return sings[count];
};

export const calculate = () => {
  greeting();
  let i = 0;
  while (i < 3) {
    let a = getNumber(25);
    let b = getNumber(25);
    let sign = getSign();
    let result;
    let answer;
    if (sign === "+") {
      result = a + b;
      console.log("Question: ", a, "+", b);
      answer = readlineSync.question("Your answer: ");
    } else if (sign === "-") {
      result = a - b;
      console.log("Question: ", a, "-", b);
      answer = readlineSync.question("Your answer: ");
    } else if (sign === "*") {
      result = a * b;
      console.log("Question: ", a, "*", b);
      answer = readlineSync.question("Your answer: ");
    }
    if (answer == result) {
      console.log("Correct!");
      i++;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'`
      );
      goodbye();
      break;
    }
  }
  win(i);
};
