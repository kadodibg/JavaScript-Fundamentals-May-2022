function lastKNumbersSequance(n, k){
    // creat result array containing 1
    let result = [1];
    //repeat (n-1) -times
    for(let i = 0; i < n -1; i++){
    //- take last k element from result array 
        let lastK = result.slice(-k);
        //- sum elements 
        let sum = 0;
        for(let element of lastK){
            sum += element;
        }
    //- add sum to array 
    result.push(sum);
    }
    // print result 
    console.log(result.join(' '));
}
lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);
lastKNumbersSequance(9, 5);