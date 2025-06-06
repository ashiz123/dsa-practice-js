function subArraySumPosition(arr, target){

    let sum = 0;
    let start = 0;

    for (let end=0; end<arr.length; end++){
        sum += arr[end];

        while(sum > target && start <= end){
            sum -= arr[start];
            start++;
        } 

        return sum;
    }

}


let arr = [1, 2, 3, 7, 8, 4]
let target = 18;
subArraySumPosition(arr , target);