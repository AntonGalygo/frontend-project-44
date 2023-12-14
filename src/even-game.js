import { engineGame, getNumber } from "./index.js";

const description = "Answer 'yes' if number even otherwise answer 'no'.";

const getValues = () => {
  let result = [];
  let question = getNumber(100);
  let rightAnswer;
  rightAnswer = question % 2 === 0 ? "yes" : "no";
  result.push(question, rightAnswer);
  return result;
};

// console.log(getValues());

export const evenGame = () => {
  engineGame(description, getValues);
};

// evenGame();
