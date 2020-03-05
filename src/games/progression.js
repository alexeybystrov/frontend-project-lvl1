import readlineSync from 'readline-sync';
import { intro, gameEngine } from '../index.js';


const task = 'What number is missing in the progression?';

const rules = () => {
  const min = 1;
  const max = 99;
  const maxStep = 5;

  const startNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const step = Math.floor(Math.random() * (maxStep - min + 1)) + min;

  const progression = [startNumber];
  for (let i = 0; i < 10; i += 1) {
    progression.push(progression[i] + step);
  }

  const indexToMask = Math.floor(Math.random() * 9);

  const question = () => {
    const maskedProgression = progression;
    maskedProgression[indexToMask] = '..';
    return maskedProgression.join(' ');
  };

  const correctAnswer = progression[indexToMask];
  const userAnswer = Number(readlineSync.question(`Question: ${question()}\nYour answer: `));
  return [correctAnswer, userAnswer];
};

export default () => {
  intro();
  gameEngine(task, rules);
};
