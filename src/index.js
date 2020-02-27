import pairs from '@hexlet/pairs';
import readlineSync from 'readline-sync';

let userName;

export const intro = () => {
  userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const gameEngine = (task, rules) => {
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const answers = rules();
    const firstNumber = pairs.car(answers);
    const secondNumber = pairs.cdr(answers);

    if (firstNumber === secondNumber) {
      console.log('Correct!');
    } else return console.log(`"${secondNumber}" is wrong answer ;(. Correct answer was "${firstNumber}".\nLet's try again, ${userName}!`);
  } return console.log(`Congratulations, ${userName}!`);
};
