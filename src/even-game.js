import readlineSync from "readline-sync";

// export const whatIsYourName = () => {
//   let name;
//   name = readlineSync.question("May I have your name? ");
//   return name;
// };

export const getNumber = () => {
  let numb = 0;
  numb = Math.floor(Math.random() * 100);
  return numb;
};

export const yesOrNo = (num) => {
  return num % 2 === 0 ? "yes" : "no";
};

export const yourAnswer = () => {
  let name;
  name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("Answer 'yes' if number even otherwise answer 'no'.");
  let answer;
  let i = 0;
  while (i < 3) {
    let generateNum = getNumber();
    console.log("Question: ", generateNum);
    let evenOrOdd = yesOrNo(generateNum);
    answer = readlineSync.question("Your answer: ");
    if (answer == evenOrOdd) {
      console.log("Correct!");
      i++;
    } else if (answer != evenOrOdd) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${evenOrOdd}'`
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
