import { getNumber, engineGame } from './index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

const getValues = () => {
  const result = [];
  const question = getNumber(47);
  const rightAnswer = primeNumbers.includes(question) ? 'yes' : 'no';
  result.push(question, rightAnswer);
  return result;
};

const primeGame = () => {
  engineGame(description, getValues);
};

export default primeGame;
