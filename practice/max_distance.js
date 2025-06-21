function maxDistance(arr){

let max = 0; //this is to store the max distance
    for(i=0; i<arr.length; i++){

        for(j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                let distance = j - i;
                max = Math.max(max, distance); //using Math.max to find the max value
            }
        }

    }

    return max;

}



console.log(maxDistance([1, 1, 2, 3, 2, 1 , 3, 3, 2]));