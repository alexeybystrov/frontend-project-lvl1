import readlineSync from 'readline-sync';


export const task = 'Find the greatest common divisor of given numbers.';

export const rules = () => {
  const min = 1;
  const max = 99;

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
  const userAnswer = Number(readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}\nYour answer: `));
  return [correctAnswer, userAnswer];
};
