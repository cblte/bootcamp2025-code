/*
E2.2 Write a function that accepts two arrays as parameters. Return a single
array that contains the items, ordered. Handle the cases where one or both of
the arrays are empty.
*/

// %%
function mergeArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Both arguments must be arrays");
  }

  let result = [...arr1, ...arr2];
  return result.sort();
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const mergedArray = mergeArrays(arr1, arr2);
console.log(mergedArray);
