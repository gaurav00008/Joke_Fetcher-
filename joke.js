const axios = require('axios');
// const chalk = require('chalk');

// console.log(chalk.red('Text')); // <-- this still works only in v4 or earlier


const chalk = require('chalk');
console.log(chalk.red('Oops!'));

async function getJoke() {
  try {
    const res = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=single');
    console.log(chalk.green('\nThe programming joke of the day is:'));
    console.log(chalk.yellow(res.data.joke));
  } catch (err) {
    console.error(chalk.red('Oops! Something went wrong:'), err.message);
  }
}

getJoke();
