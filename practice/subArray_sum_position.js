const subArraySumPosition = (arr, target) => {
    let n = arr.length;
    let sum = 0;
    let start = 0;
   
   
    for(let end = 0; end < n; end++){
         sum += arr[end];

         //if exceed sum more than target value
         while(sum > target && start <= end){
            sum -= arr[start]; //take off inital value like fifo
            start++; //shift your start 
         }

         
         if(sum===target){
            return [start+1, end+1];
         }
    }
}

let arr = [1, 2, 3, 5, 6, 2];
let target = 14;
//op = [3, 5]

export default subArraySumPosition;

