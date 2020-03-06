import { intro, randomizer, gameEngine } from '../index.js';


const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const min = 1;
  const max = 99;

  const question = randomizer(min, max);

  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  const questionString = `${question}`;
  return [correctAnswer, questionString];
};

export default () => {
  intro();
  gameEngine(task, generateQuestionAndAnswer);
};
