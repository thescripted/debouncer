# somethingscripted/debouncer - Another debounce file.

## About The Project

Debouncing is a perfomance method intended to reduce potentially expensive operations by limiting the frequency in which the operation is called.

This project implements a 'leading debouncer' i.e., the function will run the first time it is called, then a timeout period will be set until the function can be called again. This timeout period will reset if the function is called before the previous timeout has elapsed.

This package will expose a function that takes in as parameters the function you want to debounce, and a timeout period. That function can then be called as many time as needed, but will only execute your function after the timeout period has elapsed.

## Example

```javascript
let array = [1, 2, 3];

const updater = debouncer(function (value) {
  array.push(value);
}, 100);

updater(4); //array = [1, 2, 3, 4]
updater(5); //array = [1, 2, 3, 4]
// 100ms later...
updater(6); //array = [1, 2, 3, 4, 6]
```

## Installation

1. Install NPM Package

```sh
npm install @somethingscripted/debouncer
```

2. Import the file into your project

```javascript
import debouncer from '@somethingscripted/debouncer';

function fn(parameters) {
  //...
}

debounce = debouncer(fn, 100);
debounce(args);
```
