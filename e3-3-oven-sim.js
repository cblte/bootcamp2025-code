/**
 * Create a microwave oven "simulator" with an Oven class that has some state
 * variables to identify its current state provides the methods to inspect the
 * state, set the timer to start cooking, end cooking when the timer stops,
 * manually stop cooking by pressing a button, and open the oven and remove
 * the food.
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
}
