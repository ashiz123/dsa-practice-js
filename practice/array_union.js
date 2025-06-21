function arrayUnion(a, b){

    let union = []

    for (let i=0; i<a.length; i++){
        if(!union.includes(a[i])){
            union.push(a[i]);
        }
    }

    for(let j=0; j<b.length; j++){
        if(!union.includes(b[j])){
            union.push(b[j]);
        }
    }


    return union;

}



console.log(arrayUnion([1,2,3,3,4], [3, 4, 5, 5]));