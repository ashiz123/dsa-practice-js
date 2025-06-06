arr= [1, 2, 3, 5, 6, 8, 8, 8, 11]
len = arr.length;
target = 8

function firstLastOccur(arr, len){
    let first = -1;
    let last = -1

    for(i=0; i<=len-1; i++){
      if(arr[i] === target)
      {
        if(first === -1){
            first = i
        }else{
            last = i
        }
      }
    }

    console.log(first,last);


}

firstLastOccur(arr,len)