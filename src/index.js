import readlineSync from 'readline-sync';

// let userName;

/* export const intro = () => {
  userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
}; */

const gameEngine = (task, generateQuestionAndAnswer) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(task);

  const gameRounds = 3;
  for (let i = 0; i < gameRounds; i += 1) {
    const [correctAnswer, question] = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
