/*
E1.6 Write a program that counts the number of letter
occurrences in a string. Return an array that contains all
letters and their count, like this for the
string cbb: [['c', 1],['b', 2]].
*/

// %%
const phrase = "Hello. This is Carsten. Nice to meet you.".toLowerCase();
const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); // define array of letters

const result = [];

// %%
for (const letter of phrase) {
  let found = false;

  // if the letter is not in the alphabet list, continue, aka skip it
  if (!alphabet.includes(letter)) {
    continue;
  }

  // if it is in, we need to increment its counter
  for (const entry of result) {
    if (entry[0] === letter) {
      entry[1]++;
      found = true;
      break;
    }
  }

  // if the letter is notyet in the result array we need to add it
  if (!found) {
    // add the letter to the array with a counter of 1
    result.push([letter, 1]);
  }
}
// %%
for (let i = 0; i < result.length; i++) {
  console.log(`Letter ${result[i]}`);
}
