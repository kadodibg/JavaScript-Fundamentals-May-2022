// function processOddNumbers(arr) {
//     // filter only elements at odd position (index)
//     let filtred = arr.filter((x, i) => i % 2 == 1);
//     // double filtred values
//     let doubled = filtred.map(x => x * 2);
//     // revers resulting array
//     let result = doubled.reverse();
//     // print result
//     console.log(result.join(' '));

// }
// processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);

function processOddNumbers(arrayInput) {
    // filter only elements at odd position (index)
    // double filtred values
    // revers resulting array
    // print result
    console.log(
        arrayInput
            .filter((x, i) => i % 2 == 1)
            .map(x => x * 2)
            .reverse()
            .join(' '));

}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);

arrayInput => arrayInput
            .filter((x, i) => i % 2 == 1)
            .map(x => x * 2)
            .reverse()
            .join(' ');

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);