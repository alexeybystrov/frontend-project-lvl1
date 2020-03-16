import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';


const task = 'What is the result of the expression?';

const calculator = (firstNum, secondNum, operation) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    case '/':
      result = firstNum / secondNum;
      break;
    default:
      // do nothing
  }
  return result;
};

const generateQuestionAndAnswer = () => {
  const min = 1;
  const max = 9;
  const operations = ['+', '-', '*'];

  const randomNumber1 = generateRandomNumber(min, max);
  const randomNumber2 = generateRandomNumber(min, max);
  const randomOperation = operations[generateRandomNumber(min, operations.length) - 1];

  const correctAnswer = calculator(randomNumber1, randomNumber2, randomOperation);
  const question = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
  return [correctAnswer.toString(), question];
};

export default () => gameEngine(task, generateQuestionAndAnswer);
