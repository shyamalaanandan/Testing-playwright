function findVou(str){
const voules ="aeiouAEIOU"
let resultvou=[]
let resultconst=[]

for(let ch of str){
if(voules.includes(ch)){
    resultvou.push(ch)

}
else
    {
resultconst.push(ch)
}

}
console.log(resultconst)
console.log(resultvou)
}

findVou("shyamala")