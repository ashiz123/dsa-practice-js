function sumAll(arr, index=0){

   if(index >= arr.length){
     return 0;
    }
    return arr[index] + sumAll(arr, index + 1);

 }


let arr = [5, 5, 6, 7, 8, 9];
console.log(sumAll(arr));