function onlyRepeatInArray(arr){

    let n = arr.length;

    for (let i=0; i<n-1; i++){
        for(let j=i+1; j<n; j++){
            if(arr[i] === arr[j]){
                return arr[i];
            }
        }
    }

}


console.log(onlyRepeatInArray([1,4,2,3,4,5]));


//worst tc : o(n2)