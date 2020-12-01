# twig-education-task

> Function that is given an array of length >= 0 and a positive integer N and returns the contents of the array divided into N equally sized arrays.

## Install

```
$ git clone https://github.com/unmaskz/twig-education-task
$ cd twig-education-task
$ npm install
```

## Tests
Several tests exist using jest to check for the following:
- If groupArrayElements is called then it must be defined.
- If first parameter is not an array.
- If second parameter is not a number.
- If array of numbers 1 to 5 is passed as the first argument and the second argument divisor is 2.
- If array of numbers 1 to 6 is passed as the first argument and the second argument divisor is 2.

To run all of the tests described above, once installed, run the command below in your terminal:
```
$ npm run test
```

## Usage
As the package has not been published to NPM, you can symlink the package folder by running the command below in your terminal:
```
$ cd twig-education-task
$ npm link
```

This creates a symlink in the global folder so you can then use the package locally in another project by running the following command in your terminal:

```
$ cd project-name
$ npm link twig-education-task
```

In your project you can then use the package through the symlink as shown below:

```js
const groupArrayElements = require("twig-education-task");

groupArrayElements([1, 2, 3, 4, 5], 2); // => [[1, 2], [3, 4], [5]];
```