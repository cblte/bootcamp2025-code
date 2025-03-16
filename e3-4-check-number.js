/*
Create a function that checks a number value and returns a promise. This promise
resolves if the number is bigger than 2, and never rejects. You'll check the
number by creating an interval. Another part of the program listens for this
promise resolution and writes a message to the console when this happens.
Basically, we "listen" for this number to be > 2.
*/

// %%
let count = 0;

const higherThanTwo = new Promise((resolve) => {
  const interval = setInterval(() => {
    console.log(`Checking: ${count}`);
    if (count > 2) {
      clearInterval(interval);
      resolve(count);
    }
  }, 500);
});

higherThanTwo.then((value) => {
  console.log(`count is > 2, the value is ${value}`);
});

// Console example
setTimeout(() => {
  count = 1;
  console.log("Count set to 1");
}, 2000);
setTimeout(() => {
  count = 2;
  console.log("Count set to 2");
}, 4000);
setTimeout(() => {
  count = 3;
  console.log("Count set to 3");
}, 6000);

/**

The code creates asynchronous monitoring of a counter variable. Here's a detailed explanation:

1. A variable `count` is initialized with the value 0.

2. A `Promise` object named `higherThanTwo` is created. A Promise is a JavaScript construct that represents a future value.

3. Inside the Promise, an interval is set up that checks every second (1000 milliseconds) if `count` is greater than 2.

4. If `count` actually becomes greater than 2, the interval is cleared and the Promise is fulfilled with `resolve()`.

5. With `.then()`, a callback function is registered that executes as soon as the Promise is fulfilled. This function outputs a message to the console.

The problem with this code is that `count` is never incremented. Therefore, it always remains at 0 and the Promise is never fulfilled.
*/
