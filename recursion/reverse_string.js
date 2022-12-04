function reverseAString(str) {
  let reversedStr = reverse(str, 0, str.length - 1);
  return reversedStr;
}

/**
 *
 * @param {string} str
 * @returns string
 */
function reverse(str, left, right) {
  if (left >= right) return str;
  let strA = str.split("");
  temp = strA[right];
  strA[right] = strA[left];
  strA[left] = temp;
  return reverse(strA.join(""), left + 1, right - 1);
}

console.log(reverseAString("shubham is the best"));
