/*
E2.4 Describe 2 objects, a TV and a remote, and their relationship.
Which methods they have, how they interface one with another.
*/
/**
 * TV and Remote Control Interface Simulation
 * Author: Carsten
 * Date: 2025-03-10
 * Version: 0.1
 *
 * This script demonstrates the relationship between a TV object and
 * a remote control object, showing how they interact with each other
 * through various methods and properties.
 */

const myCoolTV = {
  brand: "LG",
  sizeInInch: "58",
  flatScreen: true,
  smartTV: true,

  turnedOn: true,
  powerToggle: function () {
    // Switching state
    this.turnedOn = !this.turnedOn;
  },

  currentChannel: 4,
  changeChannel: function (channelNumber) {
    console.log("Changing channel to", channelNumber);
    this.currentChannel = channelNumber;
  },
  currentVolume: 75,
  adjustVolumne: function (amount) {
    const newVolume = this.currentVolume + amount;
    if (newVolume < 0) {
      this.currentVolume = 0;
    } else if (newVolume > 100) {
      this.currentVolume = 100;
    } else {
      this.currentVolume = newVolume;
    }
  },
};

const remote = {
  brand: "LG",
  keys: 76,
  model: "LG-58-fstv",
  belongsTo: myCoolTV,
  batteryLevel: 94,
  actionCost: 0.5,
  drainBattery: function (value) {
    // every action costs its power.
    this.batteryLevel = this.batteryLevel - value * this.actionCost;
  },

  toggleTvState: function () {
    this.myCoolTV.powerToggle();
    this.drainBattery(1);
  },

  setTVChannel: function (channelSeq) {
    const channelNumber = channelSeq.reduce((acc, digit) => {
      return acc + digit.toString();
    }, "");
    this.drainBattery(channelSeq.length);
    // Use the TV's method to change the channel
    this.belongsTo.changeChannel(Number(channelNumber));
  },
  volumeUp: function () {
    myCoolTV.adjustVolumne(1);
    this.drainBattery(1);
  },
  volumeDown: function () {
    myCoolTV.adjustVolumne(-1);
    this.drainBattery(1);
  },
};

// Display important values from the remote
console.log("Remote Properties:");
console.log("Brand:", remote.brand);
console.log("Model:", remote.model);
console.log("Battery Level:", remote.batteryLevel + "%");
console.log("TV it belongs to:", remote.belongsTo.brand, remote.belongsTo.sizeInInch + '"');
console.log("Number of keys:", remote.keys);

console.log("\nChanging Settings:");
remote.setTVChannel([71]);
console.log("Channel changed to:", myCoolTV.currentChannel);
console.log("Battery Level:", remote.batteryLevel + "%");

// Increase volume by 5
for (let i = 0; i < 5; i++) {
  remote.volumeUp();
}
console.log("Volume increased to:", myCoolTV.currentVolume);
console.log("Battery Level:", remote.batteryLevel + "%");
