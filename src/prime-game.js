import { getNumber, engineGame } from "../src/index.js";

const description =
  "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

export const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

export const getValues = () => {
  let result = [];
  let question = getNumber(100);
  let rightAnswer = primeNumbers.includes(question) ? "yes" : "no";
  result.push(question, rightAnswer);
  return result;
};

export const primeGame = () => {
  engineGame(description, getValues);
};
