function recursiveSum(arr, index = 0) {
  if (index >= arr.length) {
    return 0; // base case
  }
  return arr[index] + recursiveSum(arr, index + 1);
}


console.log(recursiveSum([1, 3, 5]));

//recursiveSum(arr, 0) ->  0>3..false   1 + recursiveSum(arr,1 ) = 1 + 8 = 9
//recursiveSum(arr, 1) ->  1>3..false   3 + recursiveSum(arr, 2) = 3 + 5 = 8;
//recursiveSum(arr, 2) ->  2>3..false   5 + recursiveSum(arr, 3) = 5 + 0 = 5;

//recursiveSum(arr, 3) ->  3>=3..true  return  0

//so if last iteration return 0 , it returns its value to function name.