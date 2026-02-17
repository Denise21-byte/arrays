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

// Exercises 5: Finding Elements with find() and findIndex()
const products = [
    {id:1, name: "Laptop", price: 999 },
    {id:2, name: "Smartphone", price: 499 },
    {id:3, name: "Tablet", price: 299 },
    {id:4, name: "Headphones", price: 199 },
];

//a
let foundProducts = products.find(product => product.id === 2);
console.log(foundProducts);

//b
let foundIndex = products.findIndex(product => product.price > 1000);
console.log(foundIndex);

//Exercises 6:Checking Array Integrity (some, every)

//a
const userAges = [18,24,33,16,40];
console.log(userAges.some(age => age <18));

//b
console.log(userAges.every(age => age >= 18));

//c
console.log(userAges.some(age => age % 5 ===0));


//Section c :Transformation & Reordering
//Exercises 7: Reversing and Sorting Arrays
const dataPoints = [42, 10, 500, 2, 77];

//a
let ascending = [...dataPoints].sort((a,b) => a - b);
console.log(ascending);


//b
let descending = [...dataPoints].sort((a,b) => b - a);
console.log(descending);
let reversed =[...dataPoints].reverse();
console.log(reversed);

//Exercise 8: Concatenation, Joining, and Slicing

const arr1 = ["A", "B", ];
const arr2 = ["C", "D",];
const sentencesParts = ["Hello", "world", "this", "is", "great"];

//a
const combined = arr1.concat(arr2);
console.log(combined);

//b
const joined = sentencesParts.join(" ");
console.log(joined);

//c
const sliced = sentencesParts.slice(1,4);
console.log(sliced);
