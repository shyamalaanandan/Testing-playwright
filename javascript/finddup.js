function fduptest(str){

    let map = new Map();
    let restult = {}

    let dat = typeof str==="string"? str.split(""):str
    for(let ch of dat){

        if(map.has(dat)){
            map.set(ch,map.get(ch)+1)
        }
        else{
            map.set(ch,1)
        }

        for(let[key,value]of map){

            if(value>1){
                restult[key]=value
            }
        }
return retsult
    }





}






console.log(fduptest("shyamala"))