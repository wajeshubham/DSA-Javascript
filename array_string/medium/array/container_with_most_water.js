/**
 *
 * @param {number[]} array
 */
function containerWithMostWaterNaive(array) {
  let maxArea = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const area = getArea(array[i], array[j], i, j);
      maxArea = Math.max(area, maxArea);
    }
  }
  return maxArea;
}

/**
 *
 * @param {number[]} array
 */
function containerWithMostWater(array) {
  let maxArea = 0;
  let left = 0;
  let right = array.length - 1;
  while (right > left) {
    let area = getArea(array[left], array[right], left, right);
    maxArea = Math.max(area, maxArea);
    if (array[left] < array[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

function getArea(a, b, ai, bi) {
  return Math.min(a, b) * (bi - ai);
}

console.log(containerWithMostWater([4, 8, 1, 2, 3, 9]));

console.log(`
height
^
|                        
|                       9
|       8               |
|       |^^^^^^^^^^^^^^^|
|       |...............|               
|       |...............|
|   4   |...............|               
|   |   |...........3...|
|   |   |.......2...|...|           
|   |   |...1...|...|...|       
|   |   |...|...|...|...|
---------------------------> width
`);
