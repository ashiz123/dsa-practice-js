arr = [1, 2, 4, 5,6, 7, 8];
target = 7;
n= arr.length;

low = 0;
high = n-1

function filterRecursive(arr, target, low, high)
{
    let mid = Math.floor((low + high)/2);
   

    if(arr[mid] === target)
    {
        console.log('found index at', mid);
        return ;
    }
    
    else if(arr[mid] > target){
        high = mid -1;
        filterRecursive(arr, target, low, high);
    }

    else{
        low = mid+1;
        filterRecursive(arr, target, low, high);
    }
}

filterRecursive(arr,target, low, high);