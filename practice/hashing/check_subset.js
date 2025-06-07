//using hashing tc : O(m + n)

function checkSubset(arr1, arr2){


    const mySet = new Set(arr1);
    
    for(const num of arr2){
        if(!mySet.has(num)){
            return false;
        }
    }

    return true;


}


console.log(checkSubset([1,2,3,3], [1,5]))