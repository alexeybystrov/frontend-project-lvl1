import readlineSync from 'readline-sync';


export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const rules = () => {
  const min = 2;
  const max = 20;

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const correctAnswerCalculation = () => {
    for (let divisor = 2; divisor < randomNumber; divisor += 1) {
      if (randomNumber % divisor === 0) {
        return 'no';
      }
    } return 'yes';
  };

  const correctAnswer = correctAnswerCalculation();
  const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  return [correctAnswer, userAnswer];
};
