// Problem 1: Filtering and Mapping with Objects
// You have an array of objects, where each object represents a student with properties name and score. 
// Write a function that uses the filter and map functions to create a new array containing 
// the names of students who scored above 80 and doubles their scores.

const students = [
    { name: 'Alice', score: 75 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 88 },
    { name: 'David', score: 60 },
    { name: 'Eve', score: 78 },
  ];

// const sloga = students
// .filter(student => student.score > 80)
// .map(student => student.score *2);

// console.log(sloga);



// Problem 2: Reducing to Find Maximum Score with Objects
// You have an array of objects representing scores in a baseball game. 
// Each object has properties team and score. Write a function that uses the reduce 
// function to find the team with the highest score.
const scores = [
  { team: 'A', score: 7 },
  { team: 'B', score: 12 },
  { team: 'C', score: 8 },
  { team: 'D', score: 9 },
  { team: 'E', score: 11 },
];

const high = scores.reduce((a,b) => {
  if(!a || b.score > a.score) {
    return b;
  } else{
    return a;
  }
}, null);

console.log(high);


// Problem 3: Counting Occurrences with Objects
// You have an array of objects representing products in a store. 
// Each object has properties name and category. 
// Write a function that uses the forEach function to count how many products belong to each 
// category and store the results in an object.
const products = [
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Shoes', category: 'Fashion' },
  { name: 'Camera', category: 'Electronics' },
  { name: 'Jeans', category: 'Fashion' },
  { name: 'Microwave', category: 'Electronics' },
];

// const categoryCounts = {};

// products.forEach(product => {
//   categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
// });

// console.log(categoryCounts);


// Problem 4: Sorting Students
// You have an array of student objects, each containing properties name and score. 
// Write a function that uses the sort function to sort the students in descending order of their scores. 
// If two students have the same score, sort them alphabetically by their names.
const students2 = [
  { name: 'Alice', score: 75 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 88 },
  { name: 'David', score: 60 },
  { name: 'Eve', score: 88 },
];

// students2.sort((a, b) => {
//   if (a.score > b.score) {
//     return 1;
//   } else if (a.score < b.score) {
//     return -1;
//   } else {
//     return a.name > b.name;
//   }
// });

// console.log(students2);




