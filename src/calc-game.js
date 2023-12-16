import getNumber from './generate-number.js';
import engineGame from './index.js';

const description = 'What is the result of the expression?';

const getSign = () => {
  const sings = ['+', '-', '*'];
  const count = Math.floor(Math.random() * 3);
  return sings[count];
};

const calculate = (a, sign, b) => {
  let rightAnswer;
  switch (sign) {
    case '+':
      rightAnswer = a + b;
      break;
    case '-':
      rightAnswer = a - b;
      break;
    case '*':
      rightAnswer = a * b;
      break;
    default:
  }
  return rightAnswer;
};

const getValues = () => {
  const a = getNumber(10);
  const b = getNumber(10);
  const sign = getSign();
  const question = `${a} ${sign} ${b}`;
  const rightAnswer = calculate(a, sign, b);
  const result = [];
  result.push(question, rightAnswer);
  return result;
};

const playCalcGame = () => {
  engineGame(description, getValues);
};

export default playCalcGame;
