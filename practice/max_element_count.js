function maxElementCount(arr){
    let maxCount = 0;
    let result = 0;

    for(i=0; i<arr.length; i++){
        let count = 0;

        for(j=0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }

        if(count>maxCount || (count === maxCount && arr[i] > result)){
            maxCount = count;
            result = arr[i];
        }

    }

    return result;

}

console.log(maxElementCount([1,1,2,3,2,1, 2]));