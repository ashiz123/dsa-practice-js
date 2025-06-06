// arr = [1, 2, 3, 4, 5, 6, 9]
// n = arr.length;
// target  = 7;

//the result will be 9 in the above case which is stored in index 7. outpout is 7.



const lowerBound = (arr, n, target) => {
   let min = 0
   let max = n-1
   let ans = "not found"
 // or you can initialize ans as last index. 
 

   while (min <= max){
      let mid = Math.floor((min + max)/2);
      
      if(arr[mid] >= target){
         ans = mid
         max = mid-1
      }
      else{
         min = mid + 1
      }


   }
   
//   console.log('Lower bound index is', ans); 
  return ans;
}

export default lowerBound;


// lowerBound(arr, n, target);