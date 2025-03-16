// %%
const phrase = "Hello. This is Carsten. Nice to meet you.".toLowerCase();

const letters = [];
// create an empty arry of 24 positions (letters in alphabet with '0's)
// the order of the letters will be random depending on the phrase.
// but it does not matter
const counter = Array(40).fill(0);

for (const letter of phrase) {
  let index = -1;

  if (!letters.includes(letter)) {
    // if letters does not include the letter, push it to the end
    letters.push(letter);
    index = letters.length - 1;
  } else {
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === letter) {
        index = i;
        break;
      }
    }
  }
  counter[index] += 1; // increment counter
}

for (let i = 0; i < letters.length; i++) {
  console.log(`Letter ${letters[i]}: ${counter[i]}`);
}
