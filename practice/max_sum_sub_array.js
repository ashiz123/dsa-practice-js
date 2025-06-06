

//Sliding window algorithm

let arr = [3,2,7,4,3,4,5,6,4];
let k = 4;

function maximumSumOfSubArray(arr , k){
  let sum = 0;
  let n = arr.length;

  for(let i=0;i<=k-1;i++)
  {
    sum = sum + arr[i];
  }

  let max = sum;

  for(let i=1;  i<=n-k; i++ ){
    sum = sum - arr[i-1] + arr[i+k-1];  //this is sliding window technique;

    if(sum > max){
        max = sum;
    }
  }

  return max;

  

}


console.log(maximumSumOfSubArray(arr, k));