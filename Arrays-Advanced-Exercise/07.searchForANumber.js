function searchForANumber(array, input){
    let takeEl = input[0]; // 5 трябва да остави 
    let cutEl = input[1]; // 2 трябва да изреже 
    let elForSearch = input[2]; // 3 трябва да търси
    let count = 0;
    let myNewArr = array.splice(0, takeEl);
    myNewArr = myNewArr.splice(cutEl);
    
    for(let i = 0; i < myNewArr.length; i++){
        if(myNewArr[i] === elForSearch){
            count++;
        }
    }
    console.log(`Number ${elForSearch} occurs ${count} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);