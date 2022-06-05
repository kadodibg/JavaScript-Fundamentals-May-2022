function sumEvenNumbers(arr) {
    // Parse each string to number
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    //Create a varible for the sum 
    let sum = 0;
    for (let num of arr) {
        if (num % 2 == 0) {
            sum += num;
        }
    }
    //print result
    console.log(sum)
}
sumEvenNumbers(['1','2','3','4','5','6']); 