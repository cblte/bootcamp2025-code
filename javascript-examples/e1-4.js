/*
E1.4 Write a program that finds the smallest and biggest
number in an array and prints them
*/

const list = [68, 2, 22, 33, 35, 88, 29, 91, 90, 43, 23];

let smallest = list[0];
let biggest = list[0];

for (let i = 0; i < list.length; i++) {
  if (list[i] < smallest) {
    smallest = list[i];
  }
  if (list[i] > biggest) {
    biggest = list[i];
  }
}

console.log(`Smallest: ${smallest} - Biggest: ${biggest}`);
