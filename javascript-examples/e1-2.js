/*
E1.2 Write a program that initializes an array with all values at 0.
Then loop over that array and change each value in the array with the value of the index
*/

const a = Array(10).fill(0);

for (let i = 0; i < a.length; i++) {
  a[i] = i;
}

console.log(a);
