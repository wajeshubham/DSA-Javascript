/**
 *
 * @param {number[]} array
 * @returns {number[]}
 */
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (array[i] < array[0]) {
      array.splice(i, 1);
      array.unshift(item);
    } else {
      for (let j = 0; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          array.splice(i, 1);
          array.splice(j, 0, item);
        }
      }
    }
  }
  return array;
}

console.log(insertionSort([2, 6, 3, 8, 4, 9, 5, 4, 1]));
