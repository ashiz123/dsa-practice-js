function maximumSumOfSubarray(arr, k){

    let windowSum = 0;

    for (let i=0; i<k; i++){
        windowSum += arr[i];
    }

    let max = windowSum;


    for (let i=k; i<arr.length; i++){
        windowSum += arr[i] - arr[i-k];
        if(windowSum > max){
            max = windowSum;
        }
    }

    return max;
}




let arr = [10, 20, 50, 30, 60, 40];
let k = 3;

console.log(maximumSumOfSubarray(arr, k));
