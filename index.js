//EXERCISE 1:Array Initialization and Property 
const productCategories = ["book", "electronics", "clothing", "home& kitchen", "toys & Games",];
// a
console.log(productCategories[0]);
// b
console.log(productCategories[productCategories.length - 1]);
// c
console.log(productCategories.length);
// d
productCategories[1] = "pen";
// e
console.log(productCategories);

//EXERCISE 2 :push, pop, shift, unshift, splice
let inventory = [10,20,30];

// a
inventory.push(40);
console.log(inventory);

// b
inventory.pop();
console.log(inventory);

// c
inventory.unshift(0);
console.log(inventory);

// d
inventory.shift();
console.log(inventory);

// e
inventory.splice(1, 1, 25, 35);
//a
console.log(inventory);


//Exercises3: Shallow Copying and the Reference Trap

//a
const originalScores = [90, 85, 78,];

//b
const referenceCopy = originalScores; //reference, not a new array
console.log(referenceCopy);

//c
referenceCopy[0] = 100;
console.log("original Scores", originalScores);  //
console.log("Reference Copy", referenceCopy);

//d
const spreadCopy = [...originalScores];

//e
spreadCopy[0] = 50;
console.log("Original Scores", originalScores);
console.log("Spread Copy", spreadCopy);

//sectionB: searching & checking

//exercise 4:: Finding Elements by Value and Index
const studentNames = ["Alice", "Bob", "Charlie", "Alice", "David"];

//a
console.log(studentNames.indexOf("Alice"));

//b
console.log(studentNames.lastIndexOf("Alice"));

//c
console.log(studentNames.includes("Charlie"));

//d
console.log(studentNames.includes("Eve"));

