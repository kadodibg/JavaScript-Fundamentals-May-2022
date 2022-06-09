// let myArr = ['one', 'two', "three", 'four'];
// let longWords = myArr.filter(x => x.length > 2);
// console.log(longWords);

// let nums = [5,-11, 3, -2, 8];
// let positiveNums = nums.filter(x => x > 0);
// console.log(positiveNums);

let nums =[5, 3, 14, -2, 8];
let r1 = nums.filter(x => x > 5);
let r2 = myFilter(nums, x => x > 5);

console.log(r1, '\n', r2)

function myFilter(arr, predicate){
    let result = [];

    for(let element of arr){
        if(predicate(element)){
            result.push(element)
        }
    }
    return result;
}