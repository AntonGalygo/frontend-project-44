import { engineGame, getNumber } from '../src/index.js';

const description = 'What is the result of the expression?';

export const getValues = () => {
  const sings = ['+', '-', '*'];
  const count = Math.floor(Math.random() * 3);
  const a = getNumber(25);
  const b = getNumber(25);
  let question;
  let rightAnswer;
  let result = [];
  let choosenSign = sings[count];
  if (choosenSign === '+') {
    rightAnswer = a + b;
    question = `${a} + ${b}`;
  } else if (choosenSign === '-') {
    rightAnswer = a - b;
    question = `${a} - ${b}`;
  } else if (choosenSign === '*') {
    rightAnswer = a * b;
    question = `${a} * ${b}`;
  }
  result.push(question, rightAnswer);
  return result;
};

export const calcGame = () => {
  engineGame(description, getValues);
};

// calcGame();
