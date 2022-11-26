/**
 * First recurring character
 * E.g:
 * Input: array = [2, 3, 6, 4, 5, 6, 2, 4, 9]
 * Output = 6
 * ---
 * Input: array = [1, 2, 3, 4, 5, 6, 7, 8]
 * Output = undefined
 * Reason: There is no recurring item so return undefined
 * */

/**
 *
 * @param {number[]} array
 * @timeComplexity O(n^2)
 * @spaceComplexity O(n)
 */
function recurringCharacter2(array) {
  let min = Infinity;
  let reoccurredIndex = null;
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) arr.push([i, j]);
    }
  }
  arr.map((item) => {
    if (item[1] - item[0] < min) {
      min = item[1] - item[0];
      reoccurredIndex = item[0];
    }
  });
  return reoccurredIndex ? array[reoccurredIndex] : undefined;
}

/**
 *
 * @param {number[]} array
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function recurringCharacter(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) return array[i];
    obj[array[i]] = true;
  }
  return undefined;
}

let recurringItem = recurringCharacter([1, 2, 3, 4, 4, 6, 7, 8]);
let recurringItem2 = recurringCharacter2([1, 2, 3, 4, 4, 6, 7, 8]);
console.log(recurringItem, recurringItem2);
