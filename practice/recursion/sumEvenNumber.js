function sumEvenNumber(arr, index = 0){

    if(index >= arr.length){
        return 0;
    }

    if(arr[index] % 2 === 0){
        return arr[index] + sumEvenNumber(arr, index + 1); //if even add the index value
    }else{
        return sumEvenNumber(arr, index + 1); //else dont add index value
    }

}


console.log(sumEvenNumber([1,2, 3 , 4]));

// sen(arr, 0) --false --false  sen(arr, 1)
//sen(arr, 1) --fasle --true 2 + sen(arr, 2)
//sen(arr, 2) -- false--false sen(arr,3)
//sen(arr, 3) --false --true 4 + sen(arr, 4);
//sen(arr, 4)-- true --- 0