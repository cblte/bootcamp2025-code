/*
E1.5 Write a program that, given an initial number,
tries to find it in an array, and prints true or false
depending on the result. Try to do it with 3 different kinds of loops
*/

// %%
const initialNumber = 78;
const randomValues = [47, 83, 15, 62, 91, 24, 78, 36, 59, 29];

// %% using a for in loop
let found = false;
for (const v of randomValues) {
  if (v === initialNumber) {
    found = true;
    break;
  }
}
if (found) {
  console.log(`Found ${initialNumber} in randomValues array`);
} else {
  console.log(`Not found ${initialNumber} in randomValues array`);
}
// ====================================

// %% Using a for loop
found = false;
for (let i = 0; i < randomValues.length; i++) {
  if (initialNumber === randomValues[i]) {
    found = true;
    break;
  }
}

if (found) {
  console.log(`Found ${initialNumber} in randomValues array`);
} else {
  console.log(`Not found ${initialNumber} in randomValues array`);
}

// ====================================

// %% using a while loop
found = false;
let i = 0;
while (i < randomValues.length) {
  if (initialNumber === randomValues[i]) {
    found = true;
    break;
  }
  i++;
}

if (found) {
  console.log(`Found ${initialNumber} in randomValues array`);
} else {
  console.log(`Not found ${initialNumber} in randomValues array`);
}
