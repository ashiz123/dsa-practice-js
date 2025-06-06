const commonElementThree = (arr1, arr2, arr3) => {

    let i=0;
    let j = 0;
    let k =0 ; //these are 3 pointers
    let result = []
  


    while(i < arr1.length && j < arr2.length && k < arr3.length){

        if(arr1[i] === arr2[j] && arr1[i] === arr3[k]){
            result.push(arr1[i]);
            i++;
            j++;
            k++;
        }

        else {
            if(arr1[i] <= arr2[j] && arr1[i] <= arr3[k]){
            i++;
            }
            else if(arr2[j] <= arr1[i] && arr2[j] <= arr3[k]){
            j++;
            } else{
            k++;
             }
            }
          
    }

    return result;


}

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [3, 5, 7, 9, 11];
let arr3 = [5, 7, 9, 11, 13];
console.log(commonElementThree(arr1, arr2, arr3));

//expectin output [5, 7, 9];

