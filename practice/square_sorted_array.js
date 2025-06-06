let arr = [1, 3, 6, 7, 8, 9];
let newArr = [];

for (let i=0; i<=arr.length-1; i++)
{
    newArr.push(arr[i] * arr[i]);
}

console.log(newArr);