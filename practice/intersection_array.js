function intersectionArray(arr1, arr2){

    let newArray = [];

    for (let i=0; i<arr1.length; i++){

        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j] && !newArray.includes(arr1[i])){
                newArray.push(arr1[i]);

            }
        }
    }
    return newArray;

}


console.log(intersectionArray([1, 2, 3, 2, 3], [1, 2, 2]))