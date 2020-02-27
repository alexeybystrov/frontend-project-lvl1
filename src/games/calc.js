import pairs from '@hexlet/pairs';
import readlineSync from 'readline-sync';


export const task = 'What is the result of the expression?';

export const rules = () => {
  const min = 1;
  const max = 9;

  const randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber3 = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
  let randomOperation;
  if (randomNumber3 === 1) {
    randomOperation = '+';
  } else if (randomNumber3 === 2) {
    randomOperation = '-';
  } else {
    randomOperation = '*';
  }

  // eslint-disable-next-line no-eval
  const correctAnswer = eval(`${randomNumber1} ${randomOperation} ${randomNumber2}`);
  const userAnswer = Number(readlineSync.question(`Question: ${randomNumber1} ${randomOperation} ${randomNumber2}\nYour answer: `));
  return pairs.cons(correctAnswer, userAnswer);
};
