// arr = [1, 3, 4, 5, 6, 7, 9];
// target = 3
// len = arr.length;
// //ouput  = 6

const upperBound = (arr, len, target) =>
{
   let low  = 0;
   let high = len - 1;
   let ans = 'not found';

   while(low <= high)
   {
      let mid = Math.floor((low + high)/2);
      

      if(arr[mid] > target)
      {
        ans = mid;
        high = mid -1;
      }

      else{
        low = mid + 1;
      }
   }

  //  console.log('upper bound index is', ans);
   return ans;
  
}

export default upperBound;