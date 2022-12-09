/**
 * Merge two sorted arrays
 * E.g:
 * Input: array1 = [0, 2, 4, 6, 8, 10], array2 = [1, 3, 5, 7, 9]
 * Output = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * */

/**
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function mergeSortedArrays(array1, array2) {
  if (!array1.length) return array2;
  if (!array2.length) return array1;
  const sortedMergedArray = [];
  let array1Element = array1[0];
  let array2Element = array2[0];

  let a = 1;
  let b = 1;

  while (array1Element || array2Element) {
    if (!array2Element || array1Element < array2Element) {
      sortedMergedArray.push(array1Element);
      array1Element = array1[a];
      a++;
    } else {
      sortedMergedArray.push(array2Element);
      array2Element = array2[b];
      b++;
    }
  }
  return sortedMergedArray;
}

let sortedArray = mergeSortedArrays([0, 2, 4, 6, 8, 10], [1, 3, 5, 7, 9]);

console.log(sortedArray);
