//sliding window

let arr = [5, 4, 3, 2, -5, 4, 6];
let k=3;
let newArr = [];




function maxNumberInSubArray(arr, k){

    let n= arr.length;
   
    for (let i=0; i<=n-k; i++){
        let max_num = -Infinity;
        
        

        for(let j=i; j<i+k; j++){
            if(arr[j] > max_num){
                max_num =arr[j];
            }
        }

        newArr.push(max_num);

      
    }
    return newArr;
}

console.log(maxNumberInSubArray(arr, k))



