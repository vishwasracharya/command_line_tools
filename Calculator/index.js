#!/usr/bin/env node
const { Command } = require('commander');

const program = new Command();

program
  .version('1.0.0')
  .description('A simple calculator tool')
  .option('-a, --add <numbers>', 'Add numbers', add)
  .option('-s, --subtract <numbers>', 'Subtract numbers', subtract);

function add(numbers) {
  const numArray = numbers.split(',').map(Number);
  const result = numArray.reduce((acc, num) => acc + num, 0);
  console.log('Result:', result);
}

function subtract(numbers) {
  const numArray = numbers.split(',').map(Number);
  const result = numArray.reduce((acc, num) => acc - num);
  console.log('Result:', result);
}

program.parse(process.argv);
