const arr = [2, 3, 8, 12, 16, 25];
const target = 8

//binary search using iteration 
const binarySearchIteration = (arr, target) => {
    let low = 0;
    let high  = arr.length -1;
    let mid;


    while(high >= low){

        mid = low + Math.floor((high - low)/2)

        if(arr[mid] == target)
        return mid;
        

        if(arr[mid] > target)
            low = mid + 1;
        

        else
            high = mid-1
        

        
    }

    return -1

}

export default binarySearchIteration





