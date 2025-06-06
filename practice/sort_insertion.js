let arr = [45, 32, 35, 30, 31]
let n = arr.length;

function sortInsertion(arr, n){
  for(let i=1; i<n; i++){
    let j = i;

  while(j>0 && arr[j-1] > arr[j]){
    let temp = arr[j-1];
    arr[j-1] = arr[j];
    arr[j] = temp;
    j--;
  }

 
        
}
return arr;
}


console.log(sortInsertion(arr, n));
