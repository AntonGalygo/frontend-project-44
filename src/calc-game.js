import readlineSync from "readline-sync";
import { getNumber } from "../src/index.js";

export const getSign = () => {
  const sings = ["+", "-", "*"];
  const count = Math.floor(Math.random() * 3);
  return sings[count];
};

export const calcPlus = (a, b) => {
  return a + b;
};

export const calcMinus = (a, b) => {
  return a - b;
};

export const calcMultipl = (a, b) => {
  return a * b;
};

export let name;
name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);
console.log("What is the result of the expression?");

export const calculate = () => {
  let i = 0;
  while (i < 3) {
    let a = getNumber();
    let b = getNumber();
    let sign = getSign();
    let result;
    let answer;
    if (sign === "+") {
      result = calcPlus(a, b);
      console.log("Question: ", a, "+", b);
      answer = readlineSync.question("Your answer: ");
    } else if (sign === "-") {
      result = calcMinus(a, b);
      console.log("Question: ", a, "-", b);
      answer = readlineSync.question("Your answer: ");
    } else if (sign === "*") {
      result = calcMultipl(a, b);
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
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
