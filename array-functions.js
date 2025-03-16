// %% Map is used to loop over an existing array and returns a new array, with the result of running a function for each
// item of the array.
const a = [1, 2, 3, 4, 5, 6];

const be = a.map((n) => n);
const b = a.map((n, i) => {
  return n;
});
console.log("be:", be, "\nb :", b);
// %% Filter methods
const even = a.filter((item) => {
  return item % 2 === 0;
});

console.log(even);
// %% find a specific element in an array
const d = [1, 2, 3, 4, 5];
// Filter the array `d` to keep only the element `3`, then remove and return that single element.
const e = d.filter((item) => item === 3).shift();
console.log(e);
// %% return an array without the asked element
const f = [1, 2, 3, 4, 5, 6];
const g = f.filter((item) => item !== 3);

console.log(g);
// %%
// Filter the `items` array to exclude any elements that are present in the `valuesToRemove` array.

const items = [1, 2, 3, 4, 5];
const valuesToRemove = [2, 4];

// Filter the `items` array to exclude elements that are in `valuesToRemove`
const filteredItems = items.filter((i) => !valuesToRemove.includes(i));

console.log(filteredItems); // Output: [1, 3, 5]
