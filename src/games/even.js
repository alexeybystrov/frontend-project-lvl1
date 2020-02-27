import pairs from '@hexlet/pairs';
import readlineSync from 'readline-sync';


export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const rules = () => {
  const min = 1;
  const max = 99;

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  return pairs.cons(correctAnswer, userAnswer);
};