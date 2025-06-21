function countPairSum(arr, target){

    arr.sort((a,b) => a-b);

   let count = 0;

   let left = 0
   let right = arr.length - 1;

   while(left < right){

    if(arr[left] + arr[right] === target){

        
        count++;
        right--;

        
       
    }

    else if(arr[left] + arr[right] > target){
        right--;
    }

    else{
        left++;
    }




   }

   return count;

}


let arr = [1, 1, 1, 1];
let target = 2;
console.log(countPairSum(arr, target));
