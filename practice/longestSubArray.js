//Brute force

function longestSubarray(arr , divider){

    
    let maxLen = 0;
    for(let i=0; i<arr.length; i++){
        let currentSum = 0;
        for(let j=i; j<arr.length; j++){
            currentSum += arr[j];
            if(currentSum % divider === 0){
                 maxLen = Math.max(maxLen, j-i+1);
              }
            }
        }


    return maxLen;

    
}


console.log(longestSubarray([2, 7, 6, 1, 4, 5], 3));


