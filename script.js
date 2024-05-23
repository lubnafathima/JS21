// methods in arr
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// push
arr.push(5); //add element in last

// pop
arr.pop(); // remove last element - return last element

// shift
arr.shift(); //remove first element

// unshift
arr.unshift(5); //add element in first

// splice - return: element that is removed in array
arr.splice(2, 3); // remove 3 elements from second index
arr.splice(5); //remove element from fifth index

// at
// console.log(arr.at(2)); //display element in second index

// concat
let newArr = [10, 11];
// console.log(arr.concat(newArr)); // add newArr to arr

// foreach - doesn't return anything
// arr.forEach(function(element, index) {
//     console.log(index, element);
// })

// INDEX OF/ LAST INDEX OF
// console.log(arr.indexOf(2));

// INCLUDES
// console.log(arr.includes(2));

// SOME - check condition and return true if one of the condition satisfies the condition
// let some = arr.some((element) => {
//   if(element % 2 === 0) {
//     return element;
//   };
// });
// console.log(some);

// FIND - check condition and return first true element
// let find = arr.find((element) => {
//   return element % 3 === 0;
// });
// console.log(find);

// FIND INDEX - return index of element that satisfies condition
// let findIndex = arr.findIndex((element) => {
//     return element % 2 === 0;
//   });
//   console.log(findIndex);

// FILTER - returns those elements that satisfy condition
// let filter = arr.filter((element) => {
//   return element % 2 === 0;
// });
// console.log(filter);

// MAP - create a new array and add result to it
// let map = arr.map((element) => {
//   return element % 2 === 0;
// });
// console.log(map);

// REVERSE - reverses the elements in the array
// console.log(arr.reverse());

// SPLIT

// JOIN -  joins all element of an array into a string
// console.log(arr.join('-'));

// REDUCE - reduces the array to single value
// let reduce = arr.reduce((sum, value) => sum + value);
// console.log(reduce);

// REDUCE RIGHT - starts from the last element and reduces the array to single value
// let reduceRight = arr.reduceRight((sum, value) => sum + value);
// console.log(reduceRight);

// ISARRAY - checks if arr is an array
// console.log(Array.isArray(arr));

console.log(arr);
