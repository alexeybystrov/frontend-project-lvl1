import { intro, randomizer, gameEngine } from '../index.js';


const task = 'Find the greatest common divisor of given numbers.';

const rules = () => {
  const min = 1;
  const max = 30;

  const randomNumber1 = randomizer(min, max);
  const randomNumber2 = randomizer(min, max);

  const correctAnswerCalculation = (firstNumber, secondNumber) => {
    const minNumber = Math.min(firstNumber, secondNumber);
    const maxNumber = Math.max(firstNumber, secondNumber);
    let result = minNumber;
    while (!(minNumber % result === 0 && maxNumber % result === 0)) {
      result -= 1;
    } return result;
  };

  const correctAnswer = correctAnswerCalculation(randomNumber1, randomNumber2);
  const questionString = `${randomNumber1} ${randomNumber2}`;
  return [correctAnswer, questionString];
};

export default () => {
  intro();
  gameEngine(task, rules);
};
