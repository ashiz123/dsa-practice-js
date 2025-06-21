function onlyRepeatInArray(arr){


    let set = new Set();
    for(i=0; i< arr.length; i++){
        if(set.has(arr[i])){
            return arr[i];
        }

        set.add(arr[i]);
    }

    return -1;


}



console.log(onlyRepeatInArray([1,3,5, 4,6,2, 4, 7]))