/*
Take the `const car = { color: 'blue' }` object and transform it into a string in the JSON notation. Then parse it back again to an object.
*/

// %%

const car = { color: "blue" };

const carInJSON = JSON.stringify(car);

console.log(car);
console.log(carInJSON);

console.log(JSON.parse(carInJSON));
