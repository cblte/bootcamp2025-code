// %%
const operations = [];

for (let i = 0; i < 5; i++) {
  operations.push(() => {
    console.log(i);
  });
}

for (const operation of operations) {
  operation();
}
