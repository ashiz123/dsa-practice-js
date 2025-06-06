function findElement(arr,  element, position=0){
   if(position >= arr.length){
        return -1;
    }
    if(arr[position] === element){
        return position;
    }
    return findElement(arr, element, position+1);
}


let arr = [1, 2, 3, 4];
let element = 3;
console.log(findElement(arr, element));


//its time complexity is o(n). No backtracking performed.