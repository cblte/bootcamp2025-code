// %%
const car = {
  color: "Blue",
  brand: "BMW",
};

console.log("The Car:", car);

delete car.brand;
console.log("The Car:", car);

car.color = "Red";
console.log("color", car.color);

const truck = {};
truck.model = "Toyota";
console.log("model", truck.model);

// -----

let age = 36;
let newAge = age;

newAge = 37;
console.log("age after setting newAge", age);

let person = {
  name: "John",
  age: 30,
};
const anotherPerson = person;
anotherPerson.name = "Jane";
anotherPerson.age = 31;

console.log("person after assigning new values to anotherPerson", person);

// -----

const otherCar = {
  start: function () {
    console.log("Starting the car...");
  },
};

otherCar.start();

const myCar = {
  brand: "Skoda",
  model: "Octavia",

  goTo: function (destination) {
    console.log(`Going to ${destination}`);
  },
};

myCar.goTo("Germany");

// ---

const printNameAndAge = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
};

const person2 = {
  name: "John",
  age: 30,
};

printNameAndAge(person);

// ---

function multipleValues() {
  const fname = "Carsten";
  const fage = 42;
  return { fname, fage };
}

const { fname, fage } = multipleValues();
console.log(fname, fage);

console.log(multipleValues());
