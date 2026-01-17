export default "12345-ABCDE";
export const applicationName = "MyAwesomeApp";
export const version = "1.0.0";
export function getCurrentDate() {
  return new Date().toISOString().split("T")[0];
}

const myName = (username) => {
  return "My Name is" + username;
};

const myDetails = {
  name: "Swarnendu",
  age: "36",
  printMyDetails() {
    console.log("Myself " + this.name + ". My age is " + this.age);
  },
};

myDetails.printMyDetails;
