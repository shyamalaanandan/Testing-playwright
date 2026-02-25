function largest(arr){


let largest=arr[0]

for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
         largest=arr[i]
    }
 
}
return largest

}

console.log(largest([2,9,3,4,10]))