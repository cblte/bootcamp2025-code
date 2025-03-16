// Create a microwave oven "simulator" with an Oven class that has some state
// variables to identify its current state provides the methods to inspect the
// state, set the timer to start cooking, end cooking when the timer stops,
// manually stop cooking by pressing a button, and open the oven and remove
// the food.

class Oven {
  doorOpen = false;
  foodInside = false;
  started = false;

  openDoor() {
    this.doorOpen = true;
  }

  closeDoor() {
    this.doorOpen = false;
  }

  putFood() {
    if (this.doorOpen) {
      this.foodInside = true;
    } else {
      throw "Cannot put food inside, when door is not open.";
    }
  }

  removeFood() {}

  start() {
    this.started = true;
  }

  stop() {
    this.started = false;
  }
  /**
   * Starts the cooking process for a specified duration.
   * @param {number} duration - The cooking duration in seconds.
   */
  startCooking(duration) {
    this.started = true;
    setTimeout(() => {
      this.started = false;
    }, duration * 1000);
  }
}
