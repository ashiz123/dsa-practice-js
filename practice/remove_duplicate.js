let arr = [1, 1, 2, 3, 4, 5, 5, 6, 7, 8]

function removeDuplicate(arr)
{
    const len = arr.length - 1
    let newArr = [];
    let duplicate_element  = [];

    for(let i=0; i<=len; i++)
    {
        let count = 0;

        for(let j= i+1; j<=len; j++)
        {
            if(arr[i] === arr[j])
            {
               count++;     
            }
        }

        if(count === 0)
        {
            newArr.push(arr[i])
        }else{
            duplicate_element.push(arr[i]);
        }

    }

    console.log('After removed duplicate', newArr);
    console.log('Duplicate element', duplicate_element);
    
}

removeDuplicate(arr)
