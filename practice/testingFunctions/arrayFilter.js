

const arrayFilter = (array, n) => {
  
  for(let i=0; i<=array.length -1; i++){
    if(array[i] === n){
        return true;
    }
}

return false;

}

export default arrayFilter;