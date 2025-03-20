// %%
class Person {
  hello() {
    console.log("Hello!");
  }
}

class Programmer extends Person {}

const carsten = new Programmer();
carsten.hello();

class Car2 {}
class Fiesta extends Car2 {}

const myCar2 = new Fiesta();

console.log(myCar2 instanceof Fiesta);
console.log(myCar2 instanceof Car2);
// %%
class Car {
  constructor() {
    console.log("Class Car");
  }
}

class Fabia extends Car {
  constructor() {
    super();
    console.log("Class Fabia");
  }
}

const myCar = new Fabia();
