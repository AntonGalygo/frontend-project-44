import readlineSync from "readline-sync";
import { getNumber, greeting, goodbye, win } from "../src/index.js";

export const generateProgression = () => {
  let i = 0;
  let a = getNumber(50);
  let b = getNumber(5);
  let sum = a;
  let arr = [];
  while (i < 10) {
    sum = sum + b;
    arr.push(sum);
    i++;
  }
  return arr;
};

export const getMissingValue = () => {
  greeting();
  console.log("What number is missing in the progression?.");
  let i = 0;
  while (i < 3) {
    let str = generateProgression();
    let newNum = "..";
    let index = getNumber(9);
    let result = str[index];
    str[index] = newNum;
    let newStr = str.join(" ");
    console.log(newStr);
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
