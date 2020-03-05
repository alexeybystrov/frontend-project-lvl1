import readlineSync from 'readline-sync';
import { intro, gameEngine } from '../index.js';


const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const rules = () => {
  const min = 1;
  const max = 99;

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  return [correctAnswer, userAnswer];
};

export default () => {
  intro();
  gameEngine(task, rules);
};
