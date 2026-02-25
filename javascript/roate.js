function rotate1(arr,k){

    let n = arr.length;
    console.log(n)
    k=k%n
    let result=[]

    for(let i=0;i<n;i++){
     
        result[i]=arr[(i+k)%n];

    }
return result;

}

console.log(rotate1(['s','h','y','a','m','a','l','a'],3))