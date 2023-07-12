# Codewars Tracker

This repository is used to track my progress on [Codewars](https://www.codewars.com/), a platform for honing coding skills through problem-solving.

## Requirements
- Node.js

## Installation
1. Clone the repository to your local machine:
```
git clone https://github.com/danielt812/codewars.git
```

2. Change into the project directory:
```
cd codewars
```

3. Install the project dependencies:
```
npm install
```

These commands will download and install the necessary packages required for running the unit tests.

If you prefer, you can also install Mocha globally using `npm`. This will allow you to use the `mocha` command directly:
```
npm install -g mocha
```

## Usage

To run the unit tests for all files, use the following command:
```
npm test
```

These commands will execute the tests using Mocha and Chai, displaying the results for each problem set.

To run the unit tests for an individual file, use `npx mocha`. For example:
```
npx mocha test/oddOrEven.js
```

If you have installed Mocha globally, you can also run the unit tests for an individual file using the `mocha` command. For example:

```
mocha test/oddOrEven.js
```
