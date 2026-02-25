const arr=[1,2,3,4,3]
let result =[]

for(let i=0;i<arr.length;i++ ){

 if(arr[i]!==3){

    result.push(arr[i])
 }

}

console.log(result)