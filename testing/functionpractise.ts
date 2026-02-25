function addition(triangle:number,square:number):number{


    return triangle+square;
}

function method(callback3:(n:number,n1:number)=>number){

    return callback3(3,6);
}

let value = method(addition);
console.log(value)
