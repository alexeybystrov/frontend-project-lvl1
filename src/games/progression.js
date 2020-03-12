import gameEngine from '../index.js';
import randomizer from '../utils.js';

const task = 'What number is missing in the progression?';

const generateQuestionAndAnswer = () => {
  const min = 1;
  const max = 99;
  const maxStep = 5;
  const progressionLength = 10;
  const firstIndex = 0;
  const lastIndex = progressionLength - 1;

  const progression = [];
  const startNumber = randomizer(min, max);
  const step = randomizer(min, maxStep);
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNumber + step * i);
  }

  const indexToMask = randomizer(firstIndex, lastIndex);

  const question = () => {
    const maskedProgression = progression;
    maskedProgression[indexToMask] = '..';
    return maskedProgression.join(' ');
  };

  const correctAnswer = progression[indexToMask].toString();
  return [correctAnswer, question()];
};

export default () => gameEngine(task, generateQuestionAndAnswer);
