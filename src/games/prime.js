import { intro, randomizer, gameEngine } from '../index.js';


const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const rules = () => {
  const min = 2;
  const max = 20;

  const randomNumber = randomizer(min, max);

  const correctAnswerCalculation = () => {
    for (let divisor = 2; divisor < randomNumber; divisor += 1) {
      if (randomNumber % divisor === 0) {
        return 'no';
      }
    } return 'yes';
  };

  const correctAnswer = correctAnswerCalculation();
  const questionString = `${randomNumber}`;
  return [correctAnswer, questionString];
};

export default () => {
  intro();
  gameEngine(task, rules);
};
