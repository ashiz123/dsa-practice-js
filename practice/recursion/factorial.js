function factorial(n ){
   // Base case: factorial of 0 or 1 is 1
  if (n===0 || n === 1) {
    return 1;
  }
  // Recursive case: n * factorial of (n - 1)
  return n * factorial(n - 1);
}



console.log(factorial(0));