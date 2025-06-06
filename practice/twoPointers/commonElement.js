const commonElement =  (arr1, arr2) =>{
    let i=0; 
    let j=0; //these are 2 pointers 

    let result = [];
   while(i < arr1.length && i < arr2.length){
        if(arr1[i] === arr2[j]){
            result.push(arr1[i]);
            i++;
            j++;
        }
        else if(arr1[i] > arr2[j]){
            j++;
        }
        else{
            i++;
        }
    }


    return result;
}




let arr1 = [1, 5, 7, 9, 11];
let arr2 = [5, 7, 20];
console.log(commonElement(arr1, arr2));