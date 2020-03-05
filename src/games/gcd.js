import { intro, gameEngine } from '../index.js';


const task = 'Find the greatest common divisor of given numbers.';

const rules = () => {
  const min = 1;
  const max = 30;

  const randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;

  const correctAnswerCalculation = () => {
    const minNumber = Math.min(randomNumber1, randomNumber2);
    const maxNumber = Math.max(randomNumber1, randomNumber2);
    let result = minNumber;
    while (!(minNumber % result === 0 && maxNumber % result === 0)) {
      result -= 1;
    } return result;
  };

  const correctAnswer = correctAnswerCalculation();
  const questionString = `${randomNumber1} ${randomNumber2}`;
  return [correctAnswer, questionString];
};

export default () => {
  intro();
  gameEngine(task, rules);
};
