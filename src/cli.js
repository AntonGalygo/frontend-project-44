import readlineSync from 'readline-sync';

const whatIsYourName = () => {
  let name;
  name = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + name + '!');
};

export default whatIsYourName;
