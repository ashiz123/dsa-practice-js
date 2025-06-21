function countPairSum(arr, target){


    const freq = {};
    let count = 0;

    for (let i=0; i<arr.length; i++){
        let compliment = target - arr[i];

        if(freq[compliment]){
            count+=freq[compliment];
        }

        freq[arr[i]] = (freq[arr[i]]||0) + 1;
    }

    return count;

}


console.log(countPairSum([1,1,1,1], 2))