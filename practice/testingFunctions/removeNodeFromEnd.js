
const removeNodeFromEnd = (arr, n) => {
    const reverseArr = arr.slice().reverse();
    let newArr = [];
    
    for(let i=0; i < reverseArr.length; i++)
    {
        if( i+1 != n){
            newArr.push(reverseArr[i]);
        }
    }

    return newArr.reverse();
} 



export default removeNodeFromEnd;