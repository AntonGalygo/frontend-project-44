import readlineSync from "readline-sync";

export const getNumber = (count) => {
  let numb = 0;
  numb = Math.floor(Math.random() * count + 1);
  return numb;
};

export const engineGame = (description, getValues) => {
  console.log("Welcome to the Brain Games!");
  let name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(description);
  let i = 0;
  while (i < 3) {
    const [question, rightAnswer] = getValues();
    console.log("Question:", question);
    let answer = readlineSync.question("Your answer: ");
    if (answer == rightAnswer) {
      console.log("Correct!");
      i++;
    } else if (answer != rightAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
