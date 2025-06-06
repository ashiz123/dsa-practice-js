import lowerBound from './lower_bound.js';
import upperBound from './upper_bound.js';

let arr = [1, 2, 2, 3, 5, 6, 8, 8, 8, 11]
let len = arr.length;
let target = 2


let first_occur = lowerBound(arr, len, target);
let last_occur = upperBound(arr, len, target) - 1;

if(first_occur< len && arr[first_occur] === target )
{
    console.log(first_occur, last_occur);
}else{
    console.log('Not found');
}

