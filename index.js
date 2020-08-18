/**
 * A performance method to limit calls to the provided function.
 * The debouncer will ignore any subsequent calls to the provided function and reset the timer
 * if the function has already been called within the provided time period. (i.e. leading debouncer)
 *
 * @param {Function} fn Function to enable debouncing
 * @param {Number} timer timer (in milliseconds) for which the debouncer will wait
 * @returns {Function} A function that will automatically be debounced
 */

function debouncer(fn, timer) {
  this.called = false;
  this.timeoutHandle = undefined;

  function _resetTimer() {
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
    }

    // If a timer input was provided, set a timeout to update the state with that timer.
    if (timer) {
      this.timeoutHandle = setTimeout(function () {
        this.called = false;
      }, timer);
    } else {
      // Otherwise, immediately set the called state to false.
      this.called = false;
    }
  }

  function debouncedFunction(...args) {
    if (!this.called) {
      this.called = true;
      fn.call(this, ...args);
    }
    _resetTimer();
  }

  return debouncedFunction;
}

module.exports = debouncer;
