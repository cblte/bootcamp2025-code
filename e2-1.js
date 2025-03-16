/* E2.1 Write a function that accepts an array of numbers as a parameter, prints their values to the console, and returns the sum of those numbers */

function sumArray(arr) {
  if (!Array.isArray(arr)) {
    console.error("Input is not an array");
    return 0;
  }

  if (arr.length === 0) {
    console.error("Input is an empty array.");
    return NaN;
  }

  arr.forEach((v) => console.log(v));

  const result = arr.reduce((a, i) => {
    return a + i;
  });

  console.log("Sum of all values:", result);
}

// Test with empty array
sumArray([]);
// Test with negative numbers
sumArray([-10, 5, -3, 8]);
sumArray([1, 2, 3, 4, 5, 6]);

// ---
