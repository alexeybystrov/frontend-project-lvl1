import readlineSync from 'readline-sync';

let userName;

export const intro = () => {
  userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const randomizer = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const gameEngine = (task, rules) => {
  console.log(task);

  const gameRounds = 3;
  for (let i = 0; i < gameRounds; i += 1) {
    const gameDetails = rules();
    const correctAnswer = String(gameDetails[0]);
    const userAnswer = readlineSync.question(`Question: ${gameDetails[1]}\nYour answer: `);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
  } return console.log(`Congratulations, ${userName}!`);
};
