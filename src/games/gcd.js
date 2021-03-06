import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const calculateGreatestCommonDivisor = (firstNumber, secondNumber) => {
  const minNumber = Math.min(firstNumber, secondNumber);
  const maxNumber = Math.max(firstNumber, secondNumber);
  let result = minNumber;
  while (!(minNumber % result === 0 && maxNumber % result === 0)) {
    result -= 1;
  } return result;
};

const generateQuestionAndAnswer = () => {
  const min = 1;
  const max = 30;

  const randomNumber1 = generateRandomNumber(min, max);
  const randomNumber2 = generateRandomNumber(min, max);

  const correctAnswer = calculateGreatestCommonDivisor(randomNumber1, randomNumber2);
  const question = `${randomNumber1} ${randomNumber2}`;
  return [correctAnswer.toString(), question];
};

export default () => gameEngine(task, generateQuestionAndAnswer);
