function repeatElementInArray(arr){

    let set = new Set();
    let newArr = [];

    for(let i=0; i<arr.length; i++){
        if(set.has(arr[i])){
            newArr.push(arr[i]);
        }

        set.add(arr[i]);
    }


    return newArr;

}


console.log(repeatElementInArray([1, 2,2, 3, 3, 4, 5, 4, 5]));