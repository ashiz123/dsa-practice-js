arr = [1, 3, 4, 5, 6, 7, 8, 9]
target = 4;
len = arr.length;

function filterNumber(arr, target, len)
{
    let low = 0;
    let high = len-1;

    while(low <= high)
    {
        let mid = Math.floor((low+ high)/2);
        if(arr[mid] === target){
            console.log('found at index', mid);
            return;
        }

        else if(arr[mid] > target){
            high = mid-1;
        }

        else{
            low = mid + 1;
        }
    }
}

filterNumber(arr, target, len)