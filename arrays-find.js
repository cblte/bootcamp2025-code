// %%
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

// Using find() to get the user with the name 'Bob'
const foundUser = users.find((user) => user.name === 'Bob');

console.log(foundUser); // Output: { id: 2, name: 'Bob', age: 30 }
