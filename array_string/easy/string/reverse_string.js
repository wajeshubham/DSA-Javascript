/**
 * Reverse a sentence
 * E.g:
 * Input: "Hi, my name is Elon Musk"
 * Output = "ksuM nolE si eman ym ,iH"
 * */

/**
 *
 * @param {string} str
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function reverseAString(str) {
  if (!str || str.length <= 1) return str;
  let length = str.length;
  let backWardString = "";
  for (let i = length - 1; i >= 0; i--) {
    backWardString += str[i];
  }
  return backWardString;
}

/**
 *
 * @param {string} str
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function reverseAString2(str) {
  if (!str || str.length <= 1) return str;
  let left = 0;
  let right = str.length - 1;
  let strArr = str.split("");
  while (right > left) {
    let temp = strArr[left];
    strArr[left] = strArr[right];
    strArr[right] = temp;
    left++;
    right--;
  }
  return strArr.join("");
}

console.log(reverseAString("Hi, my name is Elon Musk"));
console.log(reverseAString2("Hi, my name is Elon Musk"));
