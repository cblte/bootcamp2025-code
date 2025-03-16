// %%
// // The fetch code below is making an HTTP request to GitHub's public API
// It retrieves information about the GitHub user "cblte"
//
// The process happens in 3 steps:
// 1. fetch() initiates the HTTP request and returns a Promise
// 2. The first .then() converts the response to JSON format
// 3. The second .then() logs the data to the console
//
// This is using the Promise-based approach to handle asynchronous operations
// The alternative using async/await is shown in the block below
fetch("https://api.github.com/users/cblte")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// %%
// // The next lines define an asynchronous function called getData
// This function uses the async/await syntax which is a more modern and readable
// way to handle promises compared to the .then() chain approach above
//
// The function will:
// 1. Fetch data from the GitHub API for user 'cblte'
// 2. Convert the response to JSON format
// 3. Log the resulting data to the console
//
// The key difference is that async/await allows you to write asynchronous code
// that looks and behaves more like synchronous code, making it easier to understand
const getData = async () => {
  const response = await fetch("https://api.github.com/users/cblte");
  const data = await response.json();
  console.log(data);
};
