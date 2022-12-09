/**
 *
 * @param {number[]} left
 * @param {number[]} right
 */
function merge(left, right) {
  let result = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

/**
 *
 * @param {number[]} array
 */
function mergeSort(array) {
  if (array.length === 1) return array;
  let length = array.length;
  let middle = Math.floor(length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

let result = mergeSort([6, 3, 8, 4, 5, 3, 2, 9, 7, 8, 10]);

console.log(result);
