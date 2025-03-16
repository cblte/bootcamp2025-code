// %%
//
const car = {
  brand: "Ford",
  model: "Fiesta",
  start: function () {
    console.log(`Started ${this.brand} ${this.model}`);
  },
};

car.start();
//Started Ford Fiesta

// %%
const car2 = {
  brand: "Skdoa",
  model: "Octavia",
  start: () => {
    // The next line will not work as this.brand and this.model are undefined
    // console.log(`Started ${this.brand} ${this.model}`);
  },
};

car2.start();
//'Started undefined undefined'

// %% Object destructuring
const person = {
  firstName: "Tom",
  lastName: "Cruise",
  actor: true,
  age: 54,
};

const { firstName, age } = person;

console.log(firstName);
console.log(age);

const { firstName: pname, age: page } = person;

console.log(pname);
console.log(page);
