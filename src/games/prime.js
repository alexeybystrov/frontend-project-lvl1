import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let divisor = 2; divisor < num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  } return true;
};

const generateQuestionAndAnswer = () => {
  const min = 2;
  const max = 20;

  const question = generateRandomNumber(min, max);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [correctAnswer, question];
};

export default () => gameEngine(task, generateQuestionAndAnswer);
