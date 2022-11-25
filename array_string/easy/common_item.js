/**
 * Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
 * E.g:
 * Input: array1 = ["a", "b", "c", "d"], array2 = ["e", "f", "g", "h"]
 * Output = false
 * Reason: array1 & array 2 doesn't have any common item
 * -----
 * Input: array1 = ["x", "y", "z", "p"], array2 = ["p", "q", "r"]
 * Output = true
 * */

/**
 *
 * @param {string[]} array1
 * @param {string[]} array2
 * @timeComplexity O(m * n)
 * @spaceComplexity O(1)
 */
function containsCommonItem(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) return true;
    }
  }
  return false;
}

/**
 *
 * @param {string[]} array1
 * @param {string[]} array2
 * @timeComplexity O(m + n)
 * @spaceComplexity O(n)
 */
function containsCommonItem2(array1, array2) {
  let object = {};

  // Create an object with all items in array1
  array1.forEach((item) => {
    if (!object[item]) {
      object[item] = true;
    }
  });
  for (let i = 0; i < array2.length; i++) {
    // check if object (with keys as items in array1) has same key as the current item
    if (object[array2[i]]) return true;
  }
  return false;
}

/**
 *
 * @param {string[]} array1
 * @param {string[]} array2
 */
function containsCommonItem3(array1, array2) {
  // space and time complexity depends on internal implementation of .some() and .includes() methods
  return array1.some((item) => array2.includes(item));
}

console.log(containsCommonItem(["a", "b", "c", "d"], ["e", "f", "g", "h"])); // false
console.log(containsCommonItem(["x", "y", "z", "p"], ["p", "q", "r"])); // true

console.log(containsCommonItem2(["a", "b", "c", "d"], ["e", "f", "g", "h"])); // false
console.log(containsCommonItem2(["x", "y", "z", "p"], ["p", "q", "r"])); // true

console.log(containsCommonItem3(["a", "b", "c", "d"], ["e", "f", "g", "h"])); // false
console.log(containsCommonItem3(["x", "y", "z", "p"], ["p", "q", "r"])); // true
