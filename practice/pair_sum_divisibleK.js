function pariSumDivisibleByK(arr, k){

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if((arr[i] + arr[j]) % k === 0){
                return true;
            }
        }
    }

    return false;
}


console.log(pariSumDivisibleByK([1,2,3,3], 6))