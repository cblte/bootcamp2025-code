/**
 * Create a microwave oven "simulator" with an Oven class that has some state
 * variables to identify its current state provides the methods to inspect the
 * state, set the timer to start cooking, end cooking when the timer stops,
 * manually stop cooking by pressing a button, and open the oven and remove
 * the food.
 *
 * There are two methods below. On is running the internal
 * tests and one is running the demonstration function.
 *
 * At the very end, is an explanation why we mock/save the
 * setTimeout function to speed up testing.
 *
 */
class Oven {
  constructor() {
    this.doorOpen = false;
    this.foodInside = false;
    this.started = false;
  }

  openDoor() {
    this.doorOpen = true;
  }

  closeDoor() {
    this.doorOpen = false;
  }

  putFood() {
    if (this.started) {
      throw "Cannot put food inside, when oven is not stopped.";
    }
    if (this.doorOpen && !this.foodInside) {
      this.foodInside = true;
    } else {
      throw "Cannot put food inside, when door is closed or food is inside.";
    }
  }

  removeFood() {
    if (this.started) {
      throw "Cannot remove food, when oven is not stopped.";
    }
    if (this.doorOpen && this.foodInside) {
      this.foodInside = false;
    } else {
      throw "Cannot remove food, when door is closed or no food is inside.";
    }
  }

  start() {
    if (!this.doorOpen && this.foodInside) {
      this.started = true;
    } else {
      throw "Cannot start oven when door is open or no food inside.";
    }
  }

  stop() {
    this.started = false;
  }

  /**
   * Starts the cooking process for a specified duration.
   * @param {number} duration - The cooking duration in seconds.
   */
  startCooking(duration) {
    if (!this.doorOpen && this.foodInside) {
      this.started = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          this.started = false;
          resolve();
        }, duration * 1000);
      });
    } else {
      throw "Cannot start cooking when door is open or no food inside.";
    }
  }

  /**
   * Self-testing method that runs all tests for the Oven class
   */
  static runTests() {
    console.log("Running Oven class tests...");

    // Helper function to run a test and report results
    function runTest(testName, testFunction) {
      console.log(`\n----- Running Test: ${testName} -----`);
      try {
        testFunction();
        console.log(`✅ PASSED: ${testName}`);
      } catch (error) {
        console.log(`❌ FAILED: ${testName}`);
        console.log(`Error: ${error}`);
      }
    }

    // Helper function to assert conditions
    function assert(condition, message) {
      if (!condition) {
        throw new Error(message || "Assertion failed");
      }
    }

    // Test initial state
    runTest("Initial state", () => {
      const oven = new Oven();
      assert(oven.doorOpen === false, "Door should be closed initially");
      assert(oven.foodInside === false, "No food should be inside initially");
      assert(oven.started === false, "Oven should not be started initially");
    });

    // Test door operations
    runTest("Door operations", () => {
      const oven = new Oven();
      oven.openDoor();
      assert(oven.doorOpen === true, "Door should be open after openDoor()");
      oven.closeDoor();
      assert(oven.doorOpen === false, "Door should be closed after closeDoor()");
    });

    // Test putting food inside
    runTest("Putting food inside", () => {
      const oven = new Oven();
      oven.openDoor();
      oven.putFood();
      assert(oven.foodInside === true, "Food should be inside after putFood()");
    });

    // Test error when putting food with door closed
    runTest("Error when putting food with door closed", () => {
      const oven = new Oven();
      let errorThrown = false;

      try {
        oven.putFood(); // Fails because door is closed.
      } catch (e) {
        errorThrown = true;
      }

      assert(errorThrown, "Should throw error when putting food with door closed");
    });

    // Test starting and stopping
    runTest("Start and stop", () => {
      const oven = new Oven();
      oven.openDoor();
      oven.putFood();
      oven.closeDoor();

      try {
        oven.start();
        assert(oven.started === true, "Oven should be started after start()");
        oven.stop();
        assert(oven.started === false, "Oven should be stopped after stop()");
      } catch (e) {
        throw new Error("Failed to start/stop oven: " + e);
      }
    });

    // Test cooking timer (mocking setTimeout)
    runTest("Cooking timer", () => {
      const oven = new Oven();
      oven.openDoor();
      oven.putFood();
      oven.closeDoor();

      // Save original setTimeout - see below the code
      const originalSetTimeout = setTimeout;

      // Mock setTimeout to execute immediately
      globalThis.setTimeout = function (callback) {
        callback();
      };

      try {
        oven.startCooking(5);
        assert(oven.started === false, "Oven should stop after cooking timer ends");
      } catch (e) {
        throw new Error("Failed during cooking timer test: " + e);
      } finally {
        // Restore original setTimeout
        globalThis.setTimeout = originalSetTimeout;
      }
    });

    // Test trying to start with no food
    runTest("Error when starting with no food", () => {
      const oven = new Oven();
      oven.closeDoor();
      let errorThrown = false;

      try {
        oven.start();
      } catch (e) {
        errorThrown = true;
      }

      assert(errorThrown, "Should throw error when starting with no food");
    });

    // Test trying to start with door open
    runTest("Error when starting with door open", () => {
      const oven = new Oven();
      oven.openDoor();
      oven.putFood();
      // Door still open!
      let errorThrown = false;

      try {
        oven.start();
      } catch (e) {
        errorThrown = true;
      }

      assert(errorThrown, "Should throw error when starting with door open");
    });

    // Test full cooking cycle
    runTest("Full cooking cycle", () => {
      const oven = new Oven();

      // Place food
      oven.openDoor();
      assert(oven.doorOpen === true, "Door should be open");
      oven.putFood();
      assert(oven.foodInside === true, "Food should be inside");
      oven.closeDoor();
      assert(oven.doorOpen === false, "Door should be closed");

      // Mock setTimeout
      const originalSetTimeout = setTimeout;
      global.setTimeout = function (callback) {
        callback();
      };

      try {
        // Cook food
        oven.startCooking(5);
        assert(oven.started === false, "Cooking should be finished after timer");

        // Remove food
        oven.openDoor();
        oven.removeFood();
        assert(oven.foodInside === false, "Food should be removed");
      } catch (e) {
        throw new Error("Failed during full cycle test: " + e);
      } finally {
        // Restore original setTimeout
        global.setTimeout = originalSetTimeout;
      }
    });

    console.log("\n----- All Tests Complete -----");
  }
}

// Run the tests
// Uncomment to run the internal tests
// Oven.runTests();

// Example usage
function demonstrateOven() {
  console.log("\n----- Oven Demonstration -----");
  const oven = new Oven();

  console.log("1. Opening door");
  oven.openDoor();
  console.log("Door open?", oven.doorOpen);

  console.log("2. Putting food inside");
  oven.putFood();
  console.log("Food inside?", oven.foodInside);

  console.log("3. Closing door");
  oven.closeDoor();
  console.log("Door closed?", !oven.doorOpen);

  console.log("4. Starting cooking (5 seconds)");
  console.log("Cooking started, please wait...");

  oven.startCooking(5).then(() => {
    console.log("5. Cooking finished automatically");
    console.log("Oven running?", oven.started);

    console.log("6. Opening door");
    oven.openDoor();

    console.log("7. Removing food");
    oven.removeFood();
    console.log("Food removed?", !oven.foodInside);

    console.log("----- Demonstration Complete -----");
  });
}

// Uncomment to run the demonstration
// demonstrateOven();

/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/**

# Explanation of Mock Functions in Testing

This code is demonstrating a technique called "mocking" in software testing.

## What is a Mock?

A mock is a simulated version of a function, module, or object that mimics
the behavior of the real implementation but in a controlled way. Mocks are
primarily used in testing to:

1. Speed up tests (avoid waiting for real operations)
2. Remove external dependencies
3. Control test conditions precisely
4. Isolate the code being tested

## What This Code Does

```javascript
// Save original setTimeout
const originalSetTimeout = setTimeout;

// Mock setTimeout to execute immediately
globalThis.setTimeout = function (callback) {
  callback();
};
```

This code is:

1. **Saving the original `setTimeout`**: The real JavaScript `setTimeout`
  function is stored in a variable called `originalSetTimeout`.

2. **Replacing `setTimeout` with a mock**: It then replaces the global
  `setTimeout` function with a custom version that executes the callback
  immediately instead of waiting for the specified time.

## Why Save the Original setTimeout?

The original `setTimeout` is saved so that:

1. It can be restored after the tests complete (though not shown in
  this excerpt)
2. It prevents permanent changes to the global environment
3. It allows other parts of the code or other tests to use the real
  implementation if needed

This technique is known as "dependency injection" or "monkey patching" and is
common in testing frameworks.

## Why Mock setTimeout?

In the Oven simulator, operations might be time-dependent (like heating up or
cooling down). When testing:

1. You don't want to wait for real time to pass (e.g., waiting minutes for an
oven to "heat up")
2. Tests would be slow and impractical
3. You want deterministic, immediate results

By mocking `setTimeout` to execute immediately, the code can test time-based
functionality without actually waiting for time to pass.

This makes the tests run much faster and more reliably, as they don't depend
on actual timing.

*/
