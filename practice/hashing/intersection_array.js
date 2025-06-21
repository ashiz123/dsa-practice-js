function intersectionArray(a, b){

    let newArray = [];
    let setA = new Set(a);

    for(let i=0; i<b.length; i++){
        if(setA.has(b[i])){
            newArray.push(b[i]);
            setA.delete(b[i]);
        }
    }

    return newArray;

}


console.log(intersectionArray([1, 1,  2, 3, 2, 3], [1, 1, 1, 2, 2]))