//  Given this function:
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...args) => args.filter(num => num % 2 === 0);



// findMin
const findMin = (...nums) => Math.min(...nums);
// findMin(1,4,12,-3);   // -3
// findMin(1,-1);   // -1
// findMin(3,1);   // 1



// mergeObjects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
// mergeObjects({a:1, b:2}, {c:3, d:4});   // {a: 1, b: 2, c: 3, d: 4}



// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];
// doubleAndReturnArgs([1,2,3],4,4);   // (5) [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2],10,4);   // (3) [2, 20, 8]



// Slice and Dice!
/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {
//     let idx = Math.floor(Math.random() * items.length);
//   return [...items.slice(0, idx), ...items.slice(idx + 1)];
// }

const removeRandom = items => {
    let RanIdx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, RanIdx), ...items.slice(RanIdx + 1)];
}



/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {
// return [...array1 , ...array2];
// }

const extend = (array1, array2) => [...array1, ...array2];



/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {
// let newObj = {...obj};
// newObj[key] = val;
// return newObj;
// }

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}



/** Return a new object with a key removed. */

// function removeKey(obj, key) {
//     let newObj = { ...obj };
//     delete newObj[key];
//     return newObj;
// }

const removeKey = (obj, key) => {
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;
}



/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {
//     let newObj = { ...obj1, ...obj2 };
//     return newObj;
// }

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });



/** Return a new object with a modified key and value. */

// function update(obj, key, val) {
// let newObj = {...obj};
// newObj[key] = val;
// return newObj;
// }

const update = (obj, key, val) => {
    let newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}
