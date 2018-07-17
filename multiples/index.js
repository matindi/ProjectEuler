let x = 10;
let numbers = []
let total=0;
for(i=0;i<x;i++){
    if((i%3==0) | (i%5==0)){
        numbers.push(i)
        total+=i;
    }
}
console.log(total)
