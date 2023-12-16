import getNumber from './generate-number.js';
import engineGame from './index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const getValues = () => {
  const question = getNumber(47);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playPrimeGame = () => {
  engineGame(description, getValues);
};

export default playPrimeGame;
