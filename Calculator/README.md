# Dynamic Calculator Tool

This project is an enhanced command-line calculator tool built with Node.js that performs various arithmetic operations like addition, subtraction, multiplication, division, calculating averages, and factorials. The tool dynamically handles input validation and error scenarios.

## Features

- **Addition**: Add multiple numbers using the `-a` or `--add` option.
- **Subtraction**: Subtract multiple numbers using the `-s` or `--subtract` option.
- **Multiplication**: Multiply multiple numbers using the `-m` or `--multiply` option.
- **Division**: Divide multiple numbers using the `-d` or `--divide` option, with handling for division by zero.
- **Average**: Calculate the average of multiple numbers using the `--avg` option.
- **Factorial**: Calculate the factorial of a single non-negative integer using the `-f` or `--factorial` option.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vishwasracharya/command_line_tools.git
   cd Calculator
   ```

2. Make the file executable:
   ```bash
   chmod +x index.js
   ```

3. Install dependencies (if any):
   ```bash
   npm install
   ```

## Usage

Run the tool using the following commands:

### Add Numbers

To add a series of numbers, use the `-a` or `--add` option followed by a comma-separated list of numbers:

```bash
./index.js --add 1,2,3,4,5
```

Output:

```
Result: 15
```

### Subtract Numbers

To subtract a series of numbers, use the `-s` or `--subtract` option followed by a comma-separated list of numbers:

```bash
./index.js --subtract 10,2,1
```

Output:

```
Result: 7
```

### Multiply Numbers

To multiply a series of numbers, use the `-m` or `--multiply` option:

```bash
./index.js --multiply 2,3,4
```

Output:

```
Result: 24
```

### Divide Numbers

To divide a series of numbers, use the `-d` or `--divide` option:

```bash
./index.js --divide 100,5,2
```

Output:

```
Result: 10
```

*Note: Division by zero is not allowed.*

### Calculate Average

To find the average of a series of numbers, use the `--avg` option:

```bash
./index.js --avg 4,8,12
```

Output:

```
Average: 8
```

### Find Factorial

To find the factorial of a number, use the `-f` or `--factorial` option:

```bash
./index.js --factorial 5
```

Output:

```
Factorial: 120
```

## Options

- `-a, --add <numbers>`: Adds the provided comma-separated numbers.
- `-s, --subtract <numbers>`: Subtracts the provided comma-separated numbers.
- `-m, --multiply <numbers>`: Multiplies the provided comma-separated numbers.
- `-d, --divide <numbers>`: Divides the provided comma-separated numbers.
- `--avg <numbers>`: Finds the average of the provided comma-separated numbers.
- `-f, --factorial <number>`: Finds the factorial of the provided number.

## Example

Here’s a quick example of using multiple features:

```bash
./index.js --add 5,10,15
./index.js --subtract 100,50,25
./index.js --multiply 2,3,4
./index.js --divide 100,5,2
./index.js --avg 4,8,12
./index.js --factorial 5
```

## Version

2.0.0

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues or pull requests for any improvements or new features.

## Author

Created by [Vishwas Acharya](https://github.com/vishwasracharya).