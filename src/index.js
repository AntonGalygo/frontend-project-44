import readlineSync from "readline-sync";

export let name;

export const greeting = () => {
  console.log("Welcome to the Brain Games!");
  name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
};

export const goodbye = () => {
  console.log(`Let's try again, ${name}!`);
};

//get a random number
export const getNumber = (count) => {
  let numb = 0;
  numb = Math.floor(Math.random() * count);
  return numb;
};

export const win = (i) => {
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
