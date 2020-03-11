import { intro, gameEngine } from '../index.js';
import randomizer from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let divisor = 2; divisor < num; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  } return true;
};

const generateQuestionAndAnswer = () => {
  const min = 2;
  const max = 20;

  const question = randomizer(min, max);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [correctAnswer, question];
};

export default () => {
  intro();
  gameEngine(task, generateQuestionAndAnswer);
};
