function sumArray(arr, position=0, result =" ") {

    if(position >= arr.length){
        return 0;
    }

    //add arr[position]
    //result 

    result = sumArray(arr, position+1, result);
    result += arr[position];
    return result;
}


console.log(sumArray([8, 9, 11, 12, 13, 15]));


//