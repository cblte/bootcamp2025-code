const a = 1;
const b = 2;
const c = a * b;

const id = setTimeout(() => {
  console.log("Hello World 2000!");
}, 2000);

setTimeout(() => {
  console.log("Hello World 50!");
}, 50);

console.log("Hello World after start. Should be one more as we removed the 2 sec one.");
clearTimeout(id);

let counter = 0;
const intervalId = setInterval(() => {
  console.log("Hello World ten five once every second!", counter);
  if (counter < 4) {
    counter++;
  } else {
    clearTimeout(intervalId);
    return;
  }
}, 1000);
