function factorial(num) {
  if (num === 1) return 1;
  return factorial(num - 1) * num;
}

function factorial2(num) {
  let fact = num;
  while (num > 1) {
    fact *= num - 1;
    num--;
  }
  return fact;
}

console.log(factorial(5));
console.log(factorial2(5));
