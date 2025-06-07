//using two pointer and sorting nlogn tc


function checkSubset(arr1, arr2){
    arr1.sort((x,y) => x-y);
    arr2.sort((x,y) => x-y);

    let i=0; 
    let j=0;

    while(i < arr1.length && j<arr2.length){


        if(arr1[i] === arr2[j] ){
            i++;
            j++;
        }

        else if(arr1[i] < arr2[j]){
            i++;
        }

         else{
            return false; //missed the continous element. so not subset
        }

    
    }

     return j === arr2.length;

}


console.log(checkSubset([1,2,4], [5, 1]))