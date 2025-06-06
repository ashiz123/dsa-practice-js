


const highestCandies = (candies, extra)  => {
  
    let n = candies.length;
    let max = candies[0];

    if(n===0) return [];

    for (let i=1; i<n; i++){
      if(candies[i] > max){
        max = candies[i];
      }
    }

    let result = [];

    for (let i=0; i<n; i++ ){
      result.push(candies[i] + extra >= max);
    }

    return result;
}




export default highestCandies;