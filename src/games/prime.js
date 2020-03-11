import { intro, randomizer, gameEngine } from '../index.js';


const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const min = 2;
  const max = 20;

  const question = randomizer(min, max);

  const isPrime = () => {
    for (let divisor = 2; divisor < question; divisor += 1) {
      if (question % divisor === 0) {
        return 'no';
      }
    } return 'yes';
  };

  const correctAnswer = isPrime();
  return [correctAnswer, question];
};

export default () => {
  intro();
  gameEngine(task, generateQuestionAndAnswer);
};
