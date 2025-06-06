let arr = [1,2,3,5,7,9, 10, 21]
let windowSize = 7
let len = arr.length;

// solution 
//  [1, 2,3] = 3
//  [2, 3,5] = 5
//  [3,5,7] = 7
//  [5, 7, 9] = 9

//  output = [3,5, 7, 9]
// loop goes to (len - windowsize ) of index

// if input = 4

// [1,2,3,5] = 5
// [2,3,5,7] = 7
// [3,5,7.9] = 9

function slidingWindow(arr, len, windowSize)
{
    let newArr = [];

    if(len < windowSize)
    {
        console.log('Window size cannot be greater than length of array');
        return;
    }
    
    for(let i=0; i<= len-windowSize; i++)
    {
        newArr.push(arr[i + windowSize-1])
    }

    console.log(newArr);
}

slidingWindow(arr,len,windowSize);
