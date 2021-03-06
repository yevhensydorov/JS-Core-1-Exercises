/* Challenge 1: Famous Writers

Did you know you can also have an array of objects? We've created one for you here. Loop through the array, and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];

If you want an extra challenge, only `console.log()` the writers that are alive.
*/

var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];


//part one start
console.log("Base exercise");
console.log("================================================");

writers.forEach(function(array) {
  console.log("Hi, my name is " + array.firstName + " " + array.lastName + ". I am " + array.age + " years old, and work as a " + array.occupation);
});


//part two
console.log("Advanced exercise");
console.log("================================================");

writers.forEach(function(writer) {
  if (writer.alive) {
    console.log("Hi, my name is " + writer.firstName + " " + writer.lastName + ". I am " + writer.age + " years old, and work as a " + writer.occupation);
  }
});

