// function definition and function call
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));

// predefined functions
console.log("Hello, world");

// arrow function
const multiply = (x, y) => x * y;
console.log(multiply(3, 4));

// call back function
function greet(callback) {
  console.log("Hello");
  callback();
}
greet(() => console.log("This is a call back function"));

// anonymous or nameless function
var square = function (num) {
  console.log(num ** 2);
};
square(7);

// recursive function
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(4));

// nested function 
function parentFunction() {
    function childFunction() {
        console.log("This is childFunction" );
  }
  childFunction()
}
parentFunction()