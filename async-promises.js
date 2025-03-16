// -----
let done = true;

const isFinished = new Promise((resolve, reject) => {
  if (done) {
    const workDone = "Here is the thing I built";
    setTimeout(() => {
      console.log("Built took 2 seconds before resolving!");
      resolve(workDone); // Move resolve inside the timeout
    }, 2000);
  } else {
    const why = "Still working on something else";
    setTimeout(() => {
      console.log("Worked for 2 seconds on something else!");
      reject(why); // Move reject inside the timeout
    }, 2000);
  }
});

isFinished
  .then((ok) => {
    console.log("OK:", ok);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

const doSomething = async () => {
  const result = await isFinished;
  console.log("Result: ", result);
};

doSomething();
console.log("End of the file;");

(async () => {
  const result = await isFinished;
  console.log("Result 2: ", result);
})();
