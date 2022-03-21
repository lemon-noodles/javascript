let name = {
  firstName: "Naveen",
  lastName: "Kumar",
  //   printFullName: function () {
  //     console.log(this.firstName + " " + this.lastName);
  //   },
};

let printFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

let printFullNameArg = function (title) {
  console.log(title + ", " + this.firstName + " " + this.lastName);
};

let printFullNameArgs = function (title, education) {
  console.log(
    title + ". " + this.firstName + " " + this.lastName + ", " + education
  );
};

// Function Borrowing
let name2 = { firstName: "John", lastName: "Doe" };
// name.printFullName();
// name.printFullName.call(name2);

// printFullName.call(name);
// printFullName.call(name2);

// printFullNameArg.call(name, "Mr");
// printFullNameArg.call(name2, "Dr");

// printFullNameArgs.call(name2, "Dr", "MBBS");
// printFullNameArgs.apply(name2, ["Dr", "MBBS"]);

let printSomeName = printFullNameArgs.bind(name2, "Dr", "MBBS");
printSomeName()
