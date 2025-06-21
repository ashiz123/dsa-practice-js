function findPair(arr, idx, subTarget) {
  let mp = new Map();
  let newArr = [];

  for (let i = idx; i < arr.length; i++) {
    let compliment = subTarget - arr[i];
    if (mp.has(compliment)) {
      newArr.push([arr[idx - 1], arr[i], compliment]);
    }
    mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);
  }

  return newArr;
}

function findTriplet(arr, target) {
  let triplets = [];
  for (let i = 0; i < arr.length; i++) {
    let subTarget = target - arr[i];
    triplets.push(...findPair(arr, i + 1, subTarget));
  }
  return triplets;
}

let trips = findTriplet([0, -1, 2, -3, 1], 0);
trips.forEach(triplet => {
  console.log(`Triplet: [${triplet[0]}, ${triplet[1]}, ${triplet[2]}]`);
});