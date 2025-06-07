function equalArray(arr1, arr2){

    let m = arr1.length;
    let n = arr2. length;
    
    if(m !== n){
        console.log('here');
        return false;
    }

    let map = {};
    for(let num of arr1){
        map[num] = (map[num] || 0) + 1;
    }

    for(let num of arr2){
        if(!(num in map) || map[num] === 0){
            return false;
            
        }
        map[num]--;
    }

    return true;

}

let arr1 = [1, 2, 3, 3, 5];
let arr2 = [2, 1, 3, 5, 3];

console.log(equalArray(arr1, arr2));



// module.exports = equalArray;