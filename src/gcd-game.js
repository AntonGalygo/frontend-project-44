import getNumber from './generate-number.js';
import engineGame from './index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return findGcd(b, a % b);
};

const getValues = () => {
  const a = getNumber(25);
  const b = getNumber(25);
  const question = `${a} ${b}`;
  const rightAnswer = findGcd(a, b);
  return [question, rightAnswer];
};

const playGcdGame = () => {
  engineGame(description, getValues);
};

export default playGcdGame;
