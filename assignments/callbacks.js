// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  return cb(arr.length);
}

function last(arr, cb) {
  cb(arr[arr.length -1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(containsItem(item, list));
}

/* STRETCH PROBLEM */

function containsItem(item, list) {
  for (let i = 0; i < list.length; i++){
    if(list[i] === item){
      return true;
    }
  }
  return false;
}

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArray = [];
  array.forEach(val => {
    if(!containsItem(val, newArray)){
      newArray.push(val);
    }
  });
  cb(newArray);
}

const testArr = ['Tom', 'Tom', 'Jerry', 'Ginger'];
const testSet = new Set(testArr);
const newArr = [...testSet];

removeDuplicates(testArr, value => console.log(value));