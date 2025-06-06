function waveForm(arr){

    arr.sort((a,b) => a-b );

    for(let i=0; i<arr.length; i+= 2){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }


    return arr;
    

}


console.log(waveForm([5, 4, 2,6]));