let arr = [1, 13, 14, 5, 7, 9, 10]
let n = arr.length - 1


// function reverse_array(arr, n)
// {
//     let newArr = []
//     while(n >= 0){
//         newArr.push(arr[n]);
//         n--;
//     }

//     console.log(newArr);

// }

function reverse_array(arr, n)
{
    let left = 0;
    let right = n;

    while (left < right)
    {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;

    }

    console.log(arr);
}



reverse_array(arr, n);
