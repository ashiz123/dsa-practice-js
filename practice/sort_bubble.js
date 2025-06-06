let arr = [1, 2, 3, 4, 6, 7]
let n= arr.length;



function bubbleSort(arr, n)
{
    let  count = 0;
    for(let i=n-1; i>=1; i--)
    {
        let didSwap = 0; //optimizing. if no swaping than , exit the loop.
        for (let j=0; j<=i-1; j++)  //loop goes up to i - 1 rather than i because, of below if statement, which compare upto j+1, if it does not get any element in j+1 than its runtime error. 
        {
            if(arr[j] > arr[j+1])
            {
                const temp = arr[j+1];
                 arr[j+1] = arr[j];
                 arr[j] = temp;
                 didSwap = 1;

            }

           
        }
        if(didSwap === 0)
            {
                break;
            }
            
        count = count + 1;
       
    }
    console.log(arr, count);
}

bubbleSort(arr, n);


