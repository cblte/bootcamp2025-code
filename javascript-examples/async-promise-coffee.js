/**
 * JAVASCRIPT PROMISES EXPLAINED: THE COFFEE EXAMPLE
 *
 * I found this coffee analogy really helpful for understanding JavaScript Promises.
 * It makes a complex concept much easier to grasp.
 *
 * HOW PROMISES WORK (COFFEE SHOP VERSION):
 *
 * Promises are like ordering at a coffee shop:
 * 1. You place your order (call a function)
 * 2. You receive a receipt (the Promise)
 * 3. Eventually you either get your coffee (resolved) or there's a problem (rejected)
 *
 * WHAT THIS CODE DEMONSTRATES:
 *
 * The code shows a coffee-making process with several steps:
 * - brewCoffee() - Creates the coffee (2 seconds)
 * - addMilk() - Adds milk to the coffee (1 second)
 * - addSugar() - Sweetens the coffee (0.5 seconds)
 * - serveCoffee() - Delivers the finished drink (1 second)
 *
 * THREE WAYS TO HANDLE ASYNCHRONOUS TASKS:
 *
 * Example 1 - Promise Chaining:
 * Completing each step in sequence (brew, then milk, then sugar, then serve)
 *
 * Example 2 - Parallel Promises:
 * Doing some steps simultaneously (adding milk and sugar at the same time)
 *
 * Example 3 - Async/Await:
 * A more readable way to write sequential promises (does the same as Example 1)
 *
 * HOW TO RUN THE EXAMPLES:
 *
 * The code comes with three examples, but only the first one runs by default.
 * Function calls are all the way at the bottom of the file.
 *
 * To experiment with the different approaches:
 * 1. First run the file as-is to see Example 1 (promise chaining)
 * 2. Uncomment "// example2();" to see parallel promises in action
 * 3. Uncomment "// prepareCoffee();" to see the async/await approach
 * 4. Try commenting out "example1();" and only running one example at a time
 * 5. Watch the console logs to see how each approach affects the timing
 *
 * PRACTICAL APPLICATIONS:
 *
 * This matters because many programming tasks take time to complete:
 * - Fetching data from servers
 * - Loading files
 * - Database operations
 *
 * Promises help manage these waiting periods efficiently without blocking other code.
 *
 * The coffee shop metaphor helped me understand how JavaScript can handle
 * time-consuming tasks while continuing to run other operations.
 */

/**
 * Simulates brewing coffee
 * @returns {Promise} Promise that resolves when coffee is brewed
 */
function brewCoffee() {
  console.log("Starting to brew coffee...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.4; // 40% chance of success

      if (success) {
        console.log("Coffee brewing complete!");
        // Was the coffee picked up right away?
        const coffeeTemperature = Math.random() > 0.2 ? "hot" : "cold";

        // Resolve the promise with the coffee object
        resolve({
          type: "coffee",
          temperature: coffeeTemperature,
          status: "freshly brewed",
        });
      } else {
        console.log("Coffee machine malfunction!");
        reject(new Error("Failed to brew coffee: machine error"));
      }
    }, 2000); // Coffee takes 2 seconds to brew (only in the future)
  });
}

/**
 * Adds milk to coffee
 * @param {Object} coffee - The coffee object
 * @returns {Promise} Promise that resolves when milk is added
 */
function addMilk(coffee) {
  console.log("Adding milk to coffee...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (coffee.temperature !== "hot") {
        reject(new Error("Cannot add milk: coffee is not hot enough"));
        return;
      }

      console.log("Milk added!");
      resolve({
        ...coffee,
        hasMilk: true,
        color: "light brown",
      });
    }, 1000); // Takes 1 second to add milk
  });
}

/**
 * Adds sugar to coffee
 * @param {Object} coffee - The coffee object
 * @returns {Promise} Promise that resolves when sugar is added
 */
function addSugar(coffee) {
  console.log("Adding sugar to coffee...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (coffee.status !== "freshly brewed") {
        reject(new Error("Cannot add sugar: coffee is not fresh"));
        return;
      }

      console.log("Sugar added!");
      resolve({
        ...coffee,
        hasSugar: true,
        taste: "sweet",
      });
    }, 500); // Takes 0.5 seconds to add sugar
  });
}

/**
 * Serves the prepared coffee
 * @param {Object} coffee - The prepared coffee
 * @returns {Promise} Promise that resolves when coffee is served
 */
function serveCoffee(coffee) {
  console.log("Serving coffee...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Coffee served! Enjoy your drink!");
      resolve({
        ...coffee,
        status: "served",
        enjoymentLevel: coffee.hasMilk && coffee.hasSugar ? "perfect" : "good",
      });
    }, 1000); // Takes 1 second to serve
  });
}

// Example 1: Sequential coffee preparation (Promise chaining)
function example1() {
  console.log("===== Making coffee with milk and sugar =====");
  brewCoffee()
    .then((coffee) => {
      console.log("Coffee brewed:", coffee);
      // We now call addMilk
      return addMilk(coffee);
    })
    .then((coffeeWithMilk) => {
      console.log("Coffee with milk:", coffeeWithMilk);
      return addSugar(coffeeWithMilk);
    })
    .then((coffeeWithMilkAndSugar) => {
      console.log("Coffee with milk and sugar:", coffeeWithMilkAndSugar);
      return serveCoffee(coffeeWithMilkAndSugar);
    })
    .then((finalCoffee) => {
      console.log("Final coffee:", finalCoffee);
      console.log(`Your ${finalCoffee.enjoymentLevel} coffee is ready!`);
    })
    .catch((error) => {
      console.error("Coffee preparation failed:", error.message);
    })
    .finally(() => {
      console.log("Coffee making process completed, successful or not.");
    });
}
// ------------------------------------

// Example 2: Parallel additions (add milk and sugar at the same time)
function example2() {
  console.log("\n===== Making coffee with simultaneous milk and sugar addition =====");
  brewCoffee()
    .then((coffee) => {
      console.log("Coffee brewed, adding milk and sugar simultaneously");

      // Start both processes at the same time
      const milkPromise = addMilk(coffee);
      const sugarPromise = addSugar(coffee);

      // Wait for both to complete
      return Promise.all([milkPromise, sugarPromise]);
    })
    .then(([coffeeWithMilk, coffeeWithSugar]) => {
      // Combine properties from both coffees
      const combinedCoffee = {
        ...coffeeWithMilk,
        ...coffeeWithSugar,
      };
      console.log("Coffee with both milk and sugar:", combinedCoffee);
      return serveCoffee(combinedCoffee);
    })
    .then((finalCoffee) => {
      console.log("Final coffee (parallel preparation):", finalCoffee);
    })
    .catch((error) => {
      console.error("Parallel coffee preparation failed:", error.message);
    });
}

// ------------------------------------

// Example 3: Async/await syntax (modern way to handle promises)
async function prepareCoffee() {
  try {
    console.log("\n===== Making coffee using async/await =====");

    // Each await pauses execution until the promise resolves
    const coffee = await brewCoffee();
    console.log("Coffee brewed (async/await):", coffee);

    const coffeeWithMilk = await addMilk(coffee);
    console.log("Added milk (async/await):", coffeeWithMilk);

    const coffeeWithMilkAndSugar = await addSugar(coffeeWithMilk);
    console.log("Added sugar (async/await):", coffeeWithMilkAndSugar);

    const finalCoffee = await serveCoffee(coffeeWithMilkAndSugar);
    console.log("Coffee served (async/await):", finalCoffee);
    console.log(`Your ${finalCoffee.enjoymentLevel} coffee is ready!`);
  } catch (error) {
    console.error("Async/await coffee preparation failed:", error.message);
  } finally {
    console.log("Async/await coffee process completed.");
  }
}

// Rund example 1
example1();

// Run example 2
// example2();

// Run the async/await example
// prepareCoffee();
