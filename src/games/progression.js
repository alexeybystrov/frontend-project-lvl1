import { intro, randomizer, gameEngine } from '../index.js';


const task = 'What number is missing in the progression?';

const generateQuestionAndAnswer = () => {
  const min = 1;
  const max = 99;
  const maxStep = 5;
  const progressionLength = 10;

  const progression = [];
  const startNumber = randomizer(min, max);
  const step = randomizer(min, maxStep);
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNumber + step * i);
  }

  const indexToMask = randomizer(min, progressionLength) - 1;

  const question = () => {
    const maskedProgression = progression;
    maskedProgression[indexToMask] = '..';
    return maskedProgression.join(' ');
  };

  const correctAnswer = progression[indexToMask];
  return [correctAnswer, question()];
};

export default () => {
  intro();
  gameEngine(task, generateQuestionAndAnswer);
};
