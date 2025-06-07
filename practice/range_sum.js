function createPrefixSum(arr) {
    let prefix = [0];
    for (let i = 0; i <= arr.length; i++) {
    //   prefix.push(prefix[i] + arr[i])
        prefix[i+1] = prefix[i] + arr[i];
    }
    return prefix;
}

function rangeSum(range, prefix) {
    return prefix[range[1] + 1] - prefix[range[0]];
}

// Example usage
const arr = [5, 4, 3, 2, 6, 1];
const prefix = createPrefixSum(arr);
const range = [2,3];

// console.log(rangeSum(range, prefix));

module.exports = {createPrefixSum, rangeSum};