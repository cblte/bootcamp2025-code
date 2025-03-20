// The reduce() method is a powerful tool in JavaScript for processing arrays by applying a function repeatedly to the
// elements of the array, resulting in a single value.

// %%
const a = [1, 2, 3, 4, 5];
const sum = a.reduce((accumulator, currentValue, index, array) => {
  console.log("accumulator :", accumulator);
  return accumulator + currentValue;
}, 1);

console.log(sum); // Output: 15
