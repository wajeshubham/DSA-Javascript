/**
 *
 * @param {number[]} array
 */
function quickSort(array) {
  if (array.length <= 1) return array;
  let pivot = array.shift(); // consider first item as pivot
  let length = array.length;
  let lessThanPivot = [];
  let greaterThanPivot = [];
  let result = [];
  for (let i = 0; i < length; i++) {
    if (array[i] <= pivot) {
      lessThanPivot.push(array[i]);
    } else {
      greaterThanPivot.push(array[i]);
    }
  }

  // generate new array with pivot on it's final place
  return result.concat([
    ...quickSort(lessThanPivot),
    pivot,
    ...quickSort(greaterThanPivot),
  ]);
}

let result = quickSort([6, 3, 8, 4, 5, 3, 2, 9, 7, 8, 10]);
console.log(result);
