import { getNumber, engineGame } from './index.js';

const description = 'Find the greatest common divisor of given numbers.';

const check = (a, b) => {
  if (!b) {
    return a;
  }
  return check(b, a % b);
};

const getValues = () => {
  const a = getNumber(25);
  const b = getNumber(25);
  const question = `${a} ${b}`;
  const rightAnswer = check(a, b);
  const result = [];
  result.push(question, rightAnswer);
  return result;
};

const gcdGame = () => {
  engineGame(description, getValues);
};

export default gcdGame;
