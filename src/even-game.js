import { engineGame, getNumber } from "./test.js";

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

const evenGame = () => {
  engineGame(description);
};

// evenGame();
