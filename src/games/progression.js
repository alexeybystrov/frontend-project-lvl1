import { intro, randomizer, gameEngine } from '../index.js';


const task = 'What number is missing in the progression?';

const rules = () => {
  const min = 1;
  const max = 99;
  const maxStep = 5;
  const progressionLength = 10;

  const startNumber = randomizer(min, max);
  const step = randomizer(min, maxStep);

  const progression = [startNumber];
  for (let i = 0; i < (progressionLength - 1); i += 1) {
    progression.push(progression[i] + step);
  }

  const indexToMask = Math.floor(Math.random() * (progressionLength - 1));

  const question = () => {
    const maskedProgression = progression;
    maskedProgression[indexToMask] = '..';
    return maskedProgression.join(' ');
  };

  const correctAnswer = progression[indexToMask];
  const questionString = `${question()}`;
  return [correctAnswer, questionString];
};

export default () => {
  intro();
  gameEngine(task, rules);
};
