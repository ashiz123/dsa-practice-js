function countPairDiff(arr, target) {
    arr.sort((a, b) => a - b);  // Ensure the array is sorted

    let count = 0;
    let i = 0;
    let j = 1;

    while (j < arr.length) {
        if (i === j) {
            j++;
          
            continue;
        }

        let diff = arr[j] - arr[i];

        if (diff === target) {
            count++;
            j++;
        } else if (diff < target) {
            j++;
        } else {
            i++;
            j=i+1;
        }
    }

    return count;
}

console.log(countPairDiff([1, 1,2, 2, 3,4], 1)); 