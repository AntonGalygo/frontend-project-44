import { getNumber, engineGame } from './index.js';

const description = 'What number is missing in the progression?';

export const generateProgression = (a, b) => {
  let i = 0;
  let sum = a;
  const arr = [];
  while (i < 10) {
    sum += b;
    arr.push(sum);
    i += 1;
  }
  return arr;
};

export const getValues = () => {
  const a = getNumber(50);
  const b = getNumber(5);
  const str = generateProgression(a, b);
  const newNum = '..';
  const index = getNumber(9);
  const rightAnswer = str[index];
  str[index] = newNum;
  const question = str.join(' ');
  const result = [];
  result.push(question, rightAnswer);
  return result;
};

export const progrGame = () => {
  engineGame(description, getValues);
};
