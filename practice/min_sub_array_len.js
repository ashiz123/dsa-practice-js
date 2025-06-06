//Sliding window
let arr = [4,1,3,1,3,3]
let target = 8

function minSubArrayLen(arr, target){
    let n = arr.length;
    let prevTotal = 0;
    let runCount = 0;

    // First window that meets or exceeds the target
    for (let i = 0; i < n; i++) {
        prevTotal += arr[i];
        runCount++;
        if (prevTotal >= target) break;
    }

    if (prevTotal < target) return 0;

    let minRunCount = runCount;

    for (let i = 1; i + runCount - 1 < n; i++) {
        let currentTotal = prevTotal - arr[i - 1];

        // Try shrinking the window
        if (currentTotal >= target) {
            runCount--;
            prevTotal = currentTotal;
            minRunCount = Math.min(minRunCount, runCount);
        }
        // Else try expanding the window
        else {
            prevTotal = currentTotal + arr[i + runCount - 1];
        }
    }

    return minRunCount;
}


console.log(minSubArrayLen(arr, target));



