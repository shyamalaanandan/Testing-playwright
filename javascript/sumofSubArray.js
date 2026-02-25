function sumOfAllSubarrays(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let Sum = 0;
    for (let j = i; j < arr.length; j++) {
      Sum = sum+arr[j];
      total = total+Sum;
    }
  }
  return total;
}

console.log(sumOfAllSubarrays([1, 2, 3, 4, 5]));