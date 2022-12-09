var backspaceCompare = function (s, t) {
  let string1 = s.split("");
  let string2 = t.split("");
  let ans1 = [];
  let ans2 = [];
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === "#") {
      ans1.pop();
    } else {
      ans1.push(string1[i]);
    }
  }

  for (let i = 0; i < string2.length; i++) {
    if (string2[i] === "#") {
      ans2.pop();
    } else {
      ans2.push(string2[i]);
    }
  }
  return ans1.join("") === ans2.join("");
};
