function countPairDiff(arr, target){
    let count = 0;
    const mp ={};

    for(let i=0; i<arr.length; i++){

        let sub = arr[i] - target;

        if(mp[sub]){
            count+=mp[sub];
        }

        mp[arr[i]] = (mp[arr[i]] || 0)+1;
        
    }

    return count;


}



console.log(countPairDiff([1,2,2,3, 4, 5], 1))