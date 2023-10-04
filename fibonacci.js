// `F(n) = F(n-1) + F(n-2)`
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// fibonacci(3); // 2
// fibonacci(7); // 13
// Sequence of numbers where the sum of the two previous numbers is the current number

function fibonacci(num) {
  f1 = 0
  f2 = 1
  sum = 0
  counter = 1

  while (counter < num){
    sum = f1 + f2
    f1 = f2
    f2 = sum
    counter++
  }
  return sum
}

module.exports = fibonacci;
