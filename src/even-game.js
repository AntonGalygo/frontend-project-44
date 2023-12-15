import { engineGame, getNumber } from './index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getValues = () => {
  const result = [];
  const question = getNumber(100);
  let rightAnswer = '';
  rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  result.push(question, rightAnswer);
  return result;
};

// console.log(getValues());

const evenGame = () => {
  engineGame(description, getValues);
};

export default evenGame;
