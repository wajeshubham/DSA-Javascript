/**
 *
 * @param {number[]} array
 * @param {number} target
 */
function towSumNaive(array, target) {
  if (array.length <= 1) return null;
  for (let i = 0; i < array.length; i++) {
    let numberToFind = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === numberToFind) return [i, j];
    }
  }
  return null;
}

/**
 *
 * @param {number[]} array
 * @param {number} target
 */
function towSum(array, target) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    let numberToLookFor = target - currentNumber;
    if (obj[currentNumber] >= 0) {
      return [obj[currentNumber], i];
    }
    obj[numberToLookFor] = i;
  }
  return null;
}

console.log(towSum([1, 3, 7, 9, 2], 11));
