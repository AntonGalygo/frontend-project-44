import readlineSync from 'readline-sync';

const engineGame = (description, getValues) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  let i = 0;
  while (i < 3) {
    const [question, rightAnswer] = getValues();
    const rightAnswerStr = rightAnswer.toString();
    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswerStr) {
      console.log('Correct!');
      i += 1;
    } else if (answer !== rightAnswerStr) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswerStr}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default engineGame;
