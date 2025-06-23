function subArrayTargetSum(arr, target){

    let prefixSum = 0;
    let start =0;
    let end = -1;
    let mp = new Map();

    for(let i=0; i<arr.length; i++){
        prefixSum += arr[i];

        if(prefixSum - target === 0){
            start =0;
            end = i;
            break;
        }

        if(mp.has(prefixSum - target)){
            start = mp.get(prefixSum - target) + 1;
            end = i;
            break;
        }else{
            mp.set(prefixSum, i);
        }
    }

    if(end === -1){
        console.log('there is no any subarray that make target value');
    }else{
        console.log('Target value lies in subarray index from ' + start + ' to ' + end);
    }


}

let arr = [5, 6, 9, 7, 3, 2];
let k = 25;
subArrayTargetSum(arr, k);