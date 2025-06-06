let sets = [25, 15, 30]
let target = 40
let n = sets.length;


function sum_subsets(sets, target, n)
{

    if(target === 0)
    {
       return 1;
    }

    if(n===0)
    {
        return 0;
    }

    if(sets[n-1] > target)
    {
        return sum_subsets(sets, target, n-1);
    }

    return sum_subsets(sets, target, n-1) + sum_subsets(sets, target-sets[n-1], n-1 )
}


// Output the number of subsets
let count = sum_subsets(sets, target, n);
console.log("Number of subsets that sum up to target:", count);
