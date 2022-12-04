/**
 *
 * @param {number}
 * @timeComplexity O(2^n)
 */
function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
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
console.log(fibonacci2(41));
console.log(fibonacci(41)); // more time consuming
