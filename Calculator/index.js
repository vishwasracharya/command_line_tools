#!/usr/bin/env node
const { Command } = require('commander');

const program = new Command();

program
  .version('2.0.0')
  .description('A dynamic and creative calculator tool')
  .option('-a, --add <numbers>', 'Add numbers', add)
  .option('-s, --subtract <numbers>', 'Subtract numbers', subtract)
  .option('-m, --multiply <numbers>', 'Multiply numbers', multiply)
  .option('-d, --divide <numbers>', 'Divide numbers', divide)
  .option('--avg <numbers>', 'Find the average of numbers', average)
  .option('-f, --factorial <number>', 'Find the factorial of a number', factorial);

function add(numbers) {
  const numArray = parseNumbers(numbers);
  if (numArray) {
    const result = numArray.reduce((acc, num) => acc + num, 0);
    console.log('Result:', result);
  }
}

function subtract(numbers) {
  const numArray = parseNumbers(numbers);
  if (numArray) {
    const result = numArray.reduce((acc, num) => acc - num);
    console.log('Result:', result);
  }
}

function multiply(numbers) {
  const numArray = parseNumbers(numbers);
  if (numArray) {
    const result = numArray.reduce((acc, num) => acc * num, 1);
    console.log('Result:', result);
  }
}

function divide(numbers) {
  const numArray = parseNumbers(numbers);
  if (numArray) {
    if (numArray.includes(0)) {
      console.error('Error: Division by zero is not allowed.');
      return;
    }
    const result = numArray.reduce((acc, num) => acc / num);
    console.log('Result:', result);
  }
}

function average(numbers) {
  const numArray = parseNumbers(numbers);
  if (numArray) {
    const total = numArray.reduce((acc, num) => acc + num, 0);
    const result = total / numArray.length;
    console.log('Average:', result);
  }
}

function factorial(number) {
  const num = parseInt(number);
  if (isNaN(num) || num < 0) {
    console.error('Error: Please provide a valid non-negative integer.');
    return;
  }
  const result = calculateFactorial(num);
  console.log('Factorial:', result);
}

function calculateFactorial(n) {
  if (n === 0) return 1;
  return n * calculateFactorial(n - 1);
}

function parseNumbers(input) {
  const numArray = input.split(',').map(Number);
  if (numArray.some(isNaN)) {
    console.error('Error: Please provide valid numbers.');
    return null;
  }
  return numArray;
}

program.parse(process.argv);
