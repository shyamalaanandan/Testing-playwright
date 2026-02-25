function leftRotate(arr, k) {
  let n = arr.length;
  console.log(n)
  k = k % n;   // handle k > n

  let result = [];

  for (let i = 0; i < n; i++) {
    result[i] = arr[(i + k) % n];
  }

  return result;
}

console.log(leftRotate([1,2,3,4,5], 2));