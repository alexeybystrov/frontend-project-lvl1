import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const min = 1;
  const max = 99;

  const question = generateRandomNumber(min, max);

  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [correctAnswer, question];
};

export default () => gameEngine(task, generateQuestionAndAnswer);
