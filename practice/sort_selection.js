let arr = [1, 5, 4, 6, 7, 8, 3]
let n= arr.length;


function selectionSort(arr, n){
   for(let i=0; i<=n-2; i++)
   {
      
    let minIndex = i;


    for(let j=i+1; j<=n-1; j++)
    {
       
        if(arr[j] < arr[minIndex] ){
            minIndex = j;
        }
    }

    if(minIndex != i)
    {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    
   }
}

selectionSort(arr, n);
console.log(arr);
