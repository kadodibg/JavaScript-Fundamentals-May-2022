let numAsStrings = ['23', '-2', '321'];

let r = arrToNumber(numAsStrings);

console.log(r[1]);

function arrToNumber(arr){
    let result = [];
    
    for(let element of arr){
        result.push(Number(element));
    }
    return result;
}



//let r1 = numAsStrings.map(x => Number(x));