// %% Introduction In this demo we'll build a calculator using JavaScript and in particular I'll put a lot of emphasis
// on the topic of functions. Since we haven't talked yet about how to get input from the browser, or the command line,
// our little calculator will be more like a library than an actual app. we will make theq we'll rewrite it a few times,
// to show the various ways we can create it. %% Calculator with regular functions

// %% Using regular functions
function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

// console.log("Sum:", sum(5, 3));
// console.log("Division:", div(10, 2));
// console.log("Multiplication:", mul(4, 6));

// %%
// assigning the functions to variables
const sum2 = function (a, b) {
  return a + b;
};

const sub2 = function (a, b) {
  return a - b;
};

const mul2 = function (a, b) {
  return a * b;
};

const div2 = function (a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
};
// console.log("Sum:", sum(5, 3));
// console.log("Division:", div(10, 2));
// console.log("Multiplication:", mul(4, 6));

// %% Compact arrow function declarations
const sum3 = (a, b) => a + b;
const sub3 = (a, b) => a - b;
const mul3 = (a, b) => a * b;
const div3 = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
};
// console.log("-----");
// console.log("Sum:", sum3(5, 3));
// console.log("Multiplication:", mul3(4, 6));
// console.log("Division:", div3(10, 2));

// %%
let state = 0;
const sum4 = (a) => state + a;
const sub4 = (a) => state - a;
const mul4 = (a) => state * a;
const div4 = (a) => {
  if (a === 0) {
    throw new Error("Division by zero");
  }
  return state / a;
};
const clear = () => (state = 0);

state = sum4(2);
state = sum4(10);
state = div4(2);
console.log("----");
console.log(state);
