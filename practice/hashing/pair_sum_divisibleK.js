function pairSumDivisibleByK(arr, k) {
  let result = [];
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let rem = num % k;
    let complement = (k - rem) % k;

    if (map.has(complement)) {
      for (let pair of map.get(complement)) {
        result.push([pair, num]);
      }
    }

    if (!map.has(rem)) {
      map.set(rem, []);
    }
    map.get(rem).push(num);
  }

  return result;
}

console.log(pairSumDivisibleByK([1, 2, 2, 3, 4], 3));