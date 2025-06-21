function findRemainingPair(arr, nextIndex, subTarget){

       

     let count = 0;
     let mapStore = new Map();


    for(let i=nextIndex; i<arr.length; i++){

        let compliment = subTarget - arr[i];
       
        if(mapStore.has(compliment)){
             count += mapStore.get(compliment);
           
        }else{
            mapStore.set(arr[i], (mapStore.get(arr[i])||0) + 1);
        }

    }

   

    return count;

 
}


function findTripleToTarget(arr, target){

    let count = 0;
   
    
    for(let i=0; i<arr.length; i++){
         let compliment = target - arr[i];
         count+=findRemainingPair(arr, i+1, compliment);
        }
   

    return count;
}



let arr = [0, -1, 2, -3, 1];
let target = -2;
console.log(findTripleToTarget(arr, target));




