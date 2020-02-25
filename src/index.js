import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

const intro = () => console.log(`Hello, ${userName}!`);


const even = () => {
  const min = 1;
  const max = 999;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
  } return console.log(`Congratulations, ${userName}!`);
};

export { intro, even };
