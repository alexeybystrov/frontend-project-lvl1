import { intro, randomizer, gameEngine } from '../index.js';


const task = 'What is the result of the expression?';

const rules = () => {
  const min = 1;
  const max = 9;
  const operationCount = 3;

  const randomNumber1 = randomizer(min, max);
  const randomNumber2 = randomizer(min, max);
  const randomNumber3 = randomizer(min, operationCount);
  let randomOperation;

  const correctAnswerCalculation = () => {
    let result = 0;
    switch (randomNumber3) {
      case 1:
        randomOperation = '+';
        result = randomNumber1 + randomNumber2;
        break;
      case 2:
        randomOperation = '-';
        result = randomNumber1 - randomNumber2;
        break;
      default:
        randomOperation = '*';
        result = randomNumber1 * randomNumber2;
    }
    return result;
  };

  const correctAnswer = correctAnswerCalculation();
  const questionString = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
  return [correctAnswer, questionString];
};

export default () => {
  intro();
  gameEngine(task, rules);
};
