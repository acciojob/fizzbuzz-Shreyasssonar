//your JS code here. If required.
// Function to generate FizzBuzz output for numbers from 1 to n
function fizzBuzz(n) {
  let result = '';

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += 'FizzBuzz\n';
    } else if (i % 3 === 0) {
      result += 'Fizz\n';
    } else if (i % 5 === 0) {
      result += 'Buzz\n';
    } else {
      result += i + '\n';
    }
  }

  return result;
}

// Output the result using alert
alert(fizzBuzz(20));
