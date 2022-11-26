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

let recurringItem = recurringCharacter([2, 3, 6, 4, 6, 6, 2, 4, 9]);
console.log(recurringItem);
