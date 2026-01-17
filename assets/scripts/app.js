import AppKey from "./utils.js";
console.log("API Key:", AppKey);
import { applicationName, version } from "./utils.js";
console.log(`Application: ${applicationName}, Version: ${version}`);
import * as Utils from "./utils.js";
console.log("Current Date:", Utils.getCurrentDate());

const myDetails = {
  name: "Swarnendu",
  age: "36",
  printMyDetails() {
    console.log("Myself " + this.name + ". My age is " + this.age);
  },
};

console.log(myDetails.name);
myDetails.printMyDetails();

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printHumanDetails() {
    console.log("Hello, I am " + this.name + ". My age is ->" + this.age);
  }
}

const man = new Human("Sohan", "8");
console.log(man.name);
man.printHumanDetails();

const myFamily = ["Swarnendu", "Anasua", "Sohan"];

const myPostion = myFamily.findIndex((item) => {
  console.log(item);
  item === "Sohan";
});
console.log(myPostion);

const myNameDetailsFamily = myFamily.map((item) => ({
  nameDetails: item,
}));
console.log(myNameDetailsFamily);

const myFullNameDetailsFamily = myFamily.map((item) =>
  item === "Anasua"
    ? { firstName: item, lastname: "Chatterjee" }
    : { firstName: item, lastname: "Ghosh" }
);
console.log(myFullNameDetailsFamily);
