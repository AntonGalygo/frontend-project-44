import getNumber from './generate-number.js';
import engineGame from './index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  return num % 2 === 0 ? 'yes' : 'no';
};

const getValues = () => {
  const result = [];
  const question = getNumber(100);
  let rightAnswer = '';
  rightAnswer = isEven(question);
  result.push(question, rightAnswer);
  return result;
};

// console.log(getValues());

const playEvenGame = () => {
  engineGame(description, getValues);
};

export default playEvenGame;
