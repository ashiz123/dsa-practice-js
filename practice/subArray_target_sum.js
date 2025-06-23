function subArrayTargetSum(arr, target){

    for(let i=0; i<arr.length; i++){
        let currSum = 0;

        for(let j=i; j<arr.length; j++){
            currSum += arr[j];

            if(currSum === target){
               return [i, j];
            }
        }
    }

}


let arr = [1, 4, 6, 20, 3, 15];
let target = 33;

console.log(subArrayTargetSum(arr, target));