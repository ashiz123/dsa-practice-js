const twoSumArray = (arr, target) => {

    let newArr = [];
    let acc = 0;


    for(let i =0; i<=arr.length-1; i++){
        acc = acc + arr[i];
       
        if(acc < target){
            newArr.push(arr[i]);
        }else{
            return newArr;
        }


    }

    return newArr;


}

export default twoSumArray;

