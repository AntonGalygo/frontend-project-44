import { getNumber, engineGame } from "../src/index.js";

const description = "Find the greatest common divisor of given numbers.";

let check = (a, b) => {
  if (!b) {
    return a;
  }
  return check(b, a % b);
};

const getValues = () => {
  const a = getNumber(25);
  const b = getNumber(25);
  let question = `${a} ${b}`;
  let rightAnswer = check(a, b);
  let result = [];
  result.push(question, rightAnswer);
  return result;
};

export const gcdGame = () => {
  engineGame(description, getValues);
};
