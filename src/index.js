import readlineSync from 'readline-sync';

const intro = () => console.log('Welcome to the Brain Games!\n');


const userName = readlineSync.question('May I have your name? ');
const greeting = () => console.log(`Hello, ${userName}!`);


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
    } else return;
  } console.log(`Congratulations, ${userName}!`); // исправить подстановку юзернейм
};

export { intro, greeting, even };
