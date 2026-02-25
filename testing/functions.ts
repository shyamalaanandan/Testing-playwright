function add(a:number,b:number){
return a+b;
}

function two(message:string){

    console.log(message)
}

const three = (message:string)=>{
    console.log(message)
}

function four(callback1:Function){
 callback1('i miss you');
}

function five(callback2:(n:number,n2:number)=>number){

   return callback2(4,7);
}
four(two);
const check = five(add)
console.log(check)

