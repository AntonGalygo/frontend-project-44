import { getNumber, engineGame } from "../src/index.js";

const description = "What number is missing in the progression?";

export const generateProgression = (a, b) => {
  let i = 0;
  let sum = a;
  let arr = [];
  while (i < 10) {
    sum = sum + b;
    arr.push(sum);
    i++;
  }
  return arr;
};

export const getValues = () => {
  const a = getNumber(50);
  const b = getNumber(5);
  let str = generateProgression(a, b);
  let newNum = "..";
  let index = getNumber(9);
  let rightAnswer = str[index];
  str[index] = newNum;
  let question = str.join(" ");
  let result = [];
  result.push(question, rightAnswer);
  return result;
};

export const progrGame = () => {
  engineGame(description, getValues);
};
