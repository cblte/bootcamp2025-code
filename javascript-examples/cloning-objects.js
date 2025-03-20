const a = 1;
const b = 2;

// Object reference demonstration
const c = {};
const d = c;
console.log(c);
d.test = "test";
console.log(c);

// Deep copying vs shallow copying demonstration
// We're about to compare how the spread operator creates a shallow copy
// This is different from the reference example above where both variables point to the same object
const e = { test: "test" };
const f = { ...e };
console.log("e:", e);
f.content = "New content"; // Not modifying the original object
console.log("f:", f);
console.log("e:", e);

// %%
// Deep cloning with nested objects demonstration
// First, let's show the problem with shallow copy
const dog = {
  name: "Buddy",
  details: {
    age: 3,
    breed: "Golden Retriever",
  },
};

// Shallow copy using spread operator
const shallowDogCopy = { ...dog }; // Not everything is cloned
console.log("Original dog:", dog);
console.log("Shallow copy dog:", shallowDogCopy);
console.log("");

// Modifying nested object in the shallow copy
shallowDogCopy.details.age = 5;
console.log("After modification of age on shallowDogCopy:");
console.log("Original dog:", dog); // The nested details.age is also modified!
console.log("Shallow copy dog:", shallowDogCopy);
console.log("");

// Deep cloning with structuredClone (modern browsers)
const modernDeepCopy = structuredClone(dog);
modernDeepCopy.details.age = 7;
console.log("Using structuredClone and modificaion of age on modernDeepCopy:");
console.log("Original dog:", dog);
console.log("Deep copy dog:", modernDeepCopy);
