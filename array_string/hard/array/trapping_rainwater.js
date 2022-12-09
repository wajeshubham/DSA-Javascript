/**
 * @param {number[]} height
 */
function trappingRainWaterNaive(height) {
  if (height.length <= 1) return 0;
  let totalCount = 0;
  let maxLeft = 0;
  let maxRight = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      if (i === j) continue;
      if (i < j) {
        if (height[j] > maxLeft) {
          maxLeft = height[j];
        }
      } else {
        if (height[j] > maxRight) {
          maxRight = height[j];
        }
      }
    }

    let waterAbove = getWaterAbove(maxLeft, maxRight, height[i]);
    if (waterAbove > 0) {
      totalCount += waterAbove;
    }
    maxLeft = 0;
    maxRight = 0;
  }
  return totalCount;
}

/**
 * @param {number[]} height
 */
function trappingRainWater(height) {
  if (height.length <= 1) return 0;
  let totalCount = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let left = 0;
  let right = height.length - 1;

  while (right > left) {
    if (height[left] <= height[right]) {
      if (height[left] > maxLeft) {
        maxLeft = height[left];
        left++;
      } else {
        let temp = maxLeft - height[left];
        totalCount += temp;
        left++;
      }
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
        right--;
      } else {
        let temp = maxRight - height[right];
        totalCount += temp;
        right--;
      }
    }
  }

  return totalCount;
}

function getWaterAbove(maxLeft, maxRight, currentHeight) {
  return Math.min(maxLeft, maxRight) - currentHeight;
}

console.log(trappingRainWater([4, 2, 0, 3, 2, 5]), 9);
// console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
