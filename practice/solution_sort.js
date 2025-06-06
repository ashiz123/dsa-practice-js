function solutionSort(arr){

   let n= arr. length;
   let newArr = [];
   
   for (let i=0; i<n; i++){
     let solution = 1*(arr[i]*arr[i])+3*arr[i]+5;
     newArr.push(solution);
   }

  
   for (let i=0; i<n-1; i++){
     let minIndex = i;

     for (let j=i+1; j<n; j++){
        if(newArr[j] < newArr[minIndex]){
            minIndex = j;
        }
    }

    if(minIndex !== i){
        let temp = newArr[i];
        newArr[i] = newArr[minIndex];
        newArr[minIndex] = temp;
    }
}

   return newArr;

}


let arr = [-4, -2, 0, 2, 4]
console.log(solutionSort(arr));
