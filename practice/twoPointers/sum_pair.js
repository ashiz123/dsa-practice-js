//using sorting and 2 pointer


function sumPairToTarget(arr, target){

    let start = 0;
    let end = arr.length - 1;
    //sort the array
    arr.sort((a,b) => a-b);


    while(start < end){

        let sum = arr[start] + arr[end];
        if(sum === target){
            return true;
        }

        else if(sum > target){
            end--;
        }

        else{
            start++;
        }
    }


    return false;

}

let arr = [-3, 2, 0, 1,-1, -2];
let target = -1;


module.exports = sumPairToTarget;