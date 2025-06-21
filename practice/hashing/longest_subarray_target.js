function longestSubArrayTarget(arr){


    let max = 0;

    for(let i=0; i<arr.length; i++){
        let curr_sum = 0;
        for(let j=i; j<arr.length; j++){
            curr_sum += arr[j];
            if(curr_sum === 0){
                max = Math.max(max, j-i+1);
            }
        }

    }

    return max;
}


let arr = [15, -2, 2, -8, 1, 7, 10, 23];
console.log(longestSubArrayTarget(arr));