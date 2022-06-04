// // // function firstHelloWord(firstNum, secondNum){
// // //     let result = firstNum + secondNum;
// // //     return result;

// // // }

// // // firstHelloWord = function (firstNum, secondNum){
// // //     let result = firstNum + secondNum;
// // //     return result;

// // // }

// // // console.log(firstHelloWord(4, 5));
// // // firstHelloWord();

// // console.log(firstHelloWord(1,2));
// // console.log(firstProgram(2, 3));

// // function firstHelloWord(firstNum, secondNum){
// //     let result = firstNum + secondNum;
// //     return result;

// // }

// // let firstProgram = function(num, num2){
// //     return num + num2;
// // }

// function firstProgram(firstName, secondName, cityName){
//     let fullName = firstName + ' ' + secondName;
//     return `My full name is ${fullName} and I am from ${cityName ? cityName : 'Sofia'}`;

// }
// console.log(firstProgram('Pesho', 'Peshov', "Gorna Malina"));
// console.log(firstProgram('Todor', 'Todorov'));

// let arrowFunc = (num1, num2) => num1 + num2;
// console.log(arrowFunc(1,2));


function solve(arr1, arr2) {
    let sum = 0
    let isEqual = true
    let lengthEqual = true
    
    let arrLength = Math.max(arr1.length, arr2.length)

    if (arr1.length !== arr2.length) {
        lengthEqual = false
    }

    for (let i = 0; i < arrLength; i++) {
        let currNum = Number(arr1[i])
        sum += currNum
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            isEqual = false;
            break;
        }
    }
    if (isEqual && lengthEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    } else if (isEqual && !lengthEqual) {
        console.log(`Arrays are not identical. Found difference at ${arrLength} index`)
    }

}
solve(['1','2','3','4','5'], ['1','2','3','4','5','5']);