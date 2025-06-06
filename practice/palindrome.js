// let str = "RaceCar"
// let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

// let len = str.length;

function checkPalindrome(str)
{
   let n = str.length;
   let left  = 0;
   let right =  n-1;
  

   while(left < right)
   {
    if(str[left] != str[right]){
        return false;
    }

      left++;
      right--;  
   }

 
   return true;

}
export default checkPalindrome;