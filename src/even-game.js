import readlineSync from "readline-sync";
import { getNumber } from "../src/index.js";

export const yesOrNo = (num) => {
  return num % 2 === 0 ? "yes" : "no";
};

export const yourAnswer = () => {
  let name;
  name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("Answer 'yes' if number even otherwise answer 'no'.");
  let answer;
  let i = 0;
  while (i < 3) {
    let generateNum = getNumber();
    console.log("Question: ", generateNum);
    let evenOrOdd = yesOrNo(generateNum);
    answer = readlineSync.question("Your answer: ");
    if (answer == evenOrOdd) {
      console.log("Correct!");
      i++;
    } else if (answer != evenOrOdd) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${evenOrOdd}'`
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
