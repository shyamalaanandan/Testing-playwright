let user:

{name: string;
    age:number;
    working : string;
    office:Array<string>;
    role:{
        testing: string;
    }

}={

    name: 'shyamala',
    age:35,
    working:'yes',
    office:['cg','tcs'],
    role:{
        testing:'QA',

    }

}
console.log(user)

let data :Record<number,string|number>;

data={

    1:'shyamala',
    2:'devi'
}
console.log(data)