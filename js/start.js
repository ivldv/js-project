let num = 33721;
let digits = num.toString().split('');
let mul = 1;
digits.forEach((item) => mul *= item);
console.log(mul);
console.log((mul ** 3).toString().slice(0, 2));