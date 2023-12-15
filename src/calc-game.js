import getNumber from './generate-number.js';
import engineGame from './index.js';

const description = 'What is the result of the expression?';

const getSign = () => {
  const sings = ['+', '-', '*'];
  const count = Math.floor(Math.random() * 3);
  const choosenSign = sings[count];
  return choosenSign;
};

const calculate = (a, sign, b) => {
  const question = `${a} ${sign} ${b}`;
  let rightAnswer;
  const result = [];
  if (sign === '+') {
    rightAnswer = a + b;
  } else if (sign === '-') {
    rightAnswer = a - b;
  } else if (sign === '*') {
    rightAnswer = a * b;
  }
  result.push(question, rightAnswer);
  return result;
};

const getValues = () => {
  const [question, rightAnswer] = calculate(getNumber(10), getSign(), getNumber(10));
  const result = [];
  result.push(question, rightAnswer);
  return result;
};

const playCalcGame = () => {
  engineGame(description, getValues);
};

export default playCalcGame;
