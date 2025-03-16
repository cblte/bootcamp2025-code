// %%
let i = 0;

const loop = () => {
  while (i < 10) {
    i++;
    console.log("loop number " + i);
  }
  return i;
};

loop();
loop();

// %%
const loop2 = () => {
  let i = 0;
  while (i < 10) {
    console.log(`Iteration ${i}`);
    i++;
  }
  return i;
};

loop2();
loop2();
