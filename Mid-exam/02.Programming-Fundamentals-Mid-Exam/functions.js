// Includes
let myArray = [10, 20, 30, 40, 50];

console.log(myIncludes(myArray, 20));
console.log(myIncludes(myArray, -20));
console.log(myArray.includes(20));
console.log(myArray.includes(-20));
console.log(myIndexOf(myArray, 40));
console.log(myIndexOf(myArray, -120));



function myIncludes(arr, value){
    
    for(let el of arr){
        if(el === value){
            return true;
        }
    }
    return false;

}

function myIndexOf(arr, value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i
        }
    }
    return -1
}