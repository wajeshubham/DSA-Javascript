/**
 *
 * @param {number}
 * @timeComplexity O(2^n)
 */
let regularCount = 0;
let memoizedCount = 0;
function fibonacci(num) {
  regularCount++;
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @param {string} queryIP
 * @return {string}
 */

function checkHex(s) {
  n = s.length;
  for (let i = 0; i < n; i++) {
    ch = s[i];
    if (
      (ch < "0" || ch > "9") &&
      (ch < "A" || ch > "F") &&
      (ch < "a" || ch > "f")
    ) {
      return false;
    }
  }

  return true;
}

/**
 *
 * @param {number}
 * @timeComplexity O(n)
 */
function fibonacci2(num) {
  let a = 0;
  let b = 1;
  while (num > 2) {
    let temp = b;
    b = a + temp;
    a = temp;
    num--;
  }
  return a + b;
}
// console.log(fibonacci2(41));
// console.log(fibonacci(41)); // more time consuming

/**
 *
 * @timeComplexity O(n)
 */
function memoizedFibonacci() {
  let cache = {};
  return function fibo(num) {
    if (num in cache) {
      return cache[num];
    } else {
      memoizedCount++;
      if (num < 2) return num;
      cache[num] = fibo(num - 1) + fibo(num - 2);
      return cache[num];
    }
  };
}

console.log("memoized: ", memoizedFibonacci()(175), "--->", memoizedCount);
console.log("Correct: ", fibonacci(10), "--->", regularCount);
