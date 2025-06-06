function maxElementInarray(arr, index=1, max=arr[0]){

    if(index >= arr.length){
        return max; //assume this is the highest one. its the base case
    }


    if(arr[index] > max){
        max = arr[index];
    }

    return maxElementInarray(arr, index+1, max);
}



console.log(maxElementInarray([1, 3, 5]))    //output : 9


//mea(arr, index=1, 1) ...false.. true...max=3 return ...mea(arr, index=2, 3)
//mea(arr, index=2, 3) ...false   true...max=5  return ...mea(arr, index=3, 5)
//mea(arr, index=3, 5) ...true  return 5