function nonDecreasingSubset(arr) {
    let tempNum = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (currentNum >= tempNum) {
            result.push(arr[i]);
            tempNum = currentNum;
        }
    }
    console.log(result.join(" "));
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);
nonDecreasingSubset([ -1, 2, 3, 4]);