import readlineSync from 'readline-sync';

let userName;

export const intro = () => {
  userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const gameEngine = (task, rules) => {
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const answers = rules();
    const correctAnswer = answers[0];
    const userAnswer = answers[1];

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
  } return console.log(`Congratulations, ${userName}!`);
};
