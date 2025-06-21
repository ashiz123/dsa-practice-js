//Do it again.

function longestZeroSum(arr){

    let maxLength = 0;
    let prefixSum = 0;
    let mp = new Map();


    for (let i=0; i<arr.length; i++){
        prefixSum += arr[i];

        if(prefixSum === 0){
            //add all the index that makes 0 and add 1 because index start at 0;
            maxLength = i + 1;

        }

        if(mp.has(prefixSum)){
            let previousIndex = mp.get(prefixSum);
            maxLength = Math.max(maxLength, i-previousIndex);

        }else{
            mp.set(prefixSum, i);
        }


    }


    return maxLength;
}



console.log(longestZeroSum([15, -2, 2, -8, 1, 7, 10, 23]))