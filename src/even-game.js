import getNumber from './generate-number.js';
import engineGame from './index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getValues = () => {
  const question = getNumber(100);
  const rightAnswer = isEven(question);
  return [question, rightAnswer];
};

const playEvenGame = () => {
  engineGame(description, getValues);
};

export default playEvenGame;
