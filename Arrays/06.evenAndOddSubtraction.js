function evenAndOddSubtraction(arr) {
    //Parse each string to number
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    //Create a varible for the sum  
    let evenSum = 0;
    let oddSum = 0;
    let result = 0;
    for (let num of arr) {
        //check is even or odd
        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    result = evenSum - oddSum;
    //print result
    console.log(result);
}
evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);