const debouncer = require('./index');

describe('debounce test suite', () => {
  it(`if a timer is not provided, then the debounced function should execute with no limits`, () => {
    let count = 0;
    const fn = () => {
      return (count = count + 1);
    };

    const debounce = debouncer(fn);
    debounce();
    debounce();
    debounce();
    expect(count).toBe(3);
  });

  it(`if a timer is provided, then the debounced function should negate the second call, if it's within the time period`, () => {
    let count = 0;
    const fn = () => {
      return (count = count + 1);
    };

    const debounce = debouncer(fn, 300);
    debounce();
    debounce();
    debounce();
    expect(count).toBe(1);
  });

  it(`should pass the arguments to the function everytime we call debounce`, done => {
    let count = 0;
    const fn = add => {
      return (count = count + add);
    };

    const debounce = debouncer(fn, 100);
    debounce(15);
    debounce(9);
    setTimeout(function () {
      debounce(10);
      expect(count).toBe(25);
      done();
    }, 150);
  });

  it('should allow for multiple number of args to the function', () => {
    let sumSolution;
    function sum(a, b) {
      sumSolution = a + b;
      return a + b;
    }

    const debounce = debouncer(sum, 100);
    debounce(5, 10);
    debounce(11, 12);
    expect(sumSolution).toBe(15);
  });
});
