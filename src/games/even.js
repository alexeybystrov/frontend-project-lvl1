import { intro, gameEngine } from '../index.js';


const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const rules = () => {
  const min = 1;
  const max = 99;

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const questionString = `${randomNumber}`;
  return [correctAnswer, questionString];
};

export default () => {
  intro();
  gameEngine(task, rules);
};
