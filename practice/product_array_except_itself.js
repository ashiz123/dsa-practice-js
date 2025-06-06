const productOfArrayExceptItself = (arr) => {
    let newArr = [];
    for(let i=0; i < arr.length; i++){
        let n=1;
        for(let j=0; j < arr.length; j++){
            if(i !== j){
                n *= arr[j];
            }
             
        }

        newArr.push(n);
    }

    return newArr;
}

// console.log(productOfArrayExceptItself([1,2,3]));

export default productOfArrayExceptItself;