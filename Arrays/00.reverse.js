// function reverse(n, arr) {
//     let slice = [];
//     //take slice from original array
//     for (let i = 0; i < n; i++) {
//         slice.push(arr[i]);
//     }
//     //console.log(slice);
//     //print new aaray in reverse
//     let result = "";
//     for (let i = slice.length - 1; i >= 0; i--) {
//         result += slice[i];
//         result += " ";
//     }
//     console.log(result);
// }
// reverse(3, [10, 20, 30, 40, 50]);
// reverse(4, [-1, 20, 99, 5]);
// reverse(2, [66, 43, 75, 89, 47]);

function reverse(n, arr) {
    let slice = [];
    //take slice from original array
    for (let i = 0; i < n; i++) {
        slice.push(arr[i]);
    }
    //console.log(slice);
    //print new aaray in reverse
    let result = [];
    for (let i = slice.length - 1; i >= 0; i--) {
        result.push(slice[i]);
    }
    console.log(result.join(' '));
}
reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);
