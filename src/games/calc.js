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
  if (randomNumber3 === 1) {
    randomOperation = '+';
  } else if (randomNumber3 === 2) {
    randomOperation = '-';
  } else {
    randomOperation = '*';
  }

  const correctAnswerCalculation = () => {
    let result = 0;
    if (randomOperation === '+') {
      result = randomNumber1 + randomNumber2;
    } else if (randomOperation === '-') {
      result = randomNumber1 - randomNumber2;
    } else {
      result = randomNumber1 * randomNumber2;
    } return result;
  };

  const correctAnswer = correctAnswerCalculation();
  const questionString = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
  return [correctAnswer, questionString];
};

export default () => {
  intro();
  gameEngine(task, rules);
};
