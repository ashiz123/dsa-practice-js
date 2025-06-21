function maxDistance(arr){

    let max = 0;
    const mp = {}

    for(i=0; i<arr.length; i++){
        if(!(arr[i] in mp)){ //checking if element is exisitng in mp
            mp[arr[i]] = i;
        }
        else{
            let result =  i - mp[arr[i]];
            max = Math.max(max, result);
        }

    }

    return max;




}


console.log(maxDistance([1, 2, 2, 2, 3, 2, 1, 2, 2]))