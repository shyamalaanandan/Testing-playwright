function merge(arr,arr1){

    result=[]
    for(let i=0;i<arr.length;i++){

        result.push(arr[i])
    }
      for(let i=0;i<arr1.length;i++){

        result.push(arr1[i])
    }

    return result

}

console.log(merge([1,2,3],[4,5]))