// For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.
//Hints
// Arithmetic Operators
// Rest Operators
// forEach()

function  sum(param1, param2){
    return param1 + param2
}

function  totalSum(...param1){
    let total = 0;
    param1.forEach(parEr =>{
         total += parEr
    })
    return total
}
console.log(totalSum(1, 2))