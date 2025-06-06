function sumOddNumber(arr, index=0){
    if(index === undefined){
        return 0;
    }

    return arr[index] + sumOddNumber(arr, index+1);

}


let arr = [1, 2, 3, 4, 5];
console.log(sumOddNumber(arr));


