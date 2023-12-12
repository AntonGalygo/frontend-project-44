// import readlineSync from "readline-sync";
import readlineSync from "readline-sync";
import { getNumber, greeting, goodbye, win } from "../src/index.js";

export const yesOrNo = (num) => {
  return num % 2 === 0 ? "yes" : "no";
};

export const yourAnswer = () => {
  greeting();
  console.log("Answer 'yes' if number even otherwise answer 'no'.");
  let answer;
  let i = 0;
  while (i < 3) {
    let generateNum = getNumber(100);
    console.log("Question: ", generateNum);
    let result = yesOrNo(generateNum);
    answer = readlineSync.question("Your answer: ");
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
