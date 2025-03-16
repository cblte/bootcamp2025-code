// %% Demo Calculator v2
let state = 0;

const sum = (a) => (state += a);
const sub = (a) => (state -= a);
const mul = (a) => (state *= a);
const div = (a) => (state /= a);
const clear = () => (state = 0);

console.log(sum(3)); // state becomes 3
console.log(mul(2)); // state becomes 6
console.log(sub(1)); // state becomes 5
console.log(div(5)); // state becomes 1
console.log(clear()); // state becomes 0
