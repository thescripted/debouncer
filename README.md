# somethingscripted/debouncer - Another debounce file.

## About The Project

Debouncing is a perfomance method intended to reduce potentially expensive operations by limiting the frequency in which the operation is called.
This project implements a 'leading debouncer' i.e., the function will run the first time it is called, then a timeout period will be set until the function can be called again. This timeout period is reset if the function is continously called before the previous timeout has elapsed.

## Example

```javascript
let simpleArray = [1, 2, 3, 4, 5];
function updater(value) {
  simpleArray = simpleArray.map(element => element + value);
}

const debouncedUpdater = debouncer(arrayUpdater, 100);
debouncedUpdater(2); //simpleArray = [3, 4, 5, 6, 7];
debouncedUpdater(3); //simpleArray = [3, 4, 5, 6, 7];
// 100ms later...
debouncedUpdater(3); //simpleArray = [6, 7, 8, 9, 10]
```

## Installation

1. Install NPM Package

```sh
npm install @somethingscripted/debouncer
```

2. Import file into your project

```javascript
import debouncer from '@somethingscripted/debouncer';

function fn(...args) {
  //...
}

debounce = debouncer(fn, 100);
debounce(args);
```
