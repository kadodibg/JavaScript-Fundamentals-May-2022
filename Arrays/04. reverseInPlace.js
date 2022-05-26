// function reverseInPlace(arr) {
//     //repeat for all elements from beginning to middle
//     // - swap current element (start + i) with element in other half (end - i)
//     // - use temp varible to store value during swap 

//     for (let i = 0; i < arr.length / 2; i++) {
//         let k = arr.length - 1 - i;
//         let temp = arr[i];
//         arr[i] = arr[k];
//         arr[k] = temp;
//     }
//     console.log(arr.join(' '));
// }
// reverseInPlace([10, 20, 30, 40, 50, 60, 70 ]); 
// reverseInPlace([10, 20, 30, 40, 50, 60]);


// function reverseInPlace(arr) {
//     //repeat for all elements from beginning to middle
//     // - swap current element (start + i) with element in other half (end - i)
//     // - use temp varible to store value during swap 

//     let k = arr.length - 1;
//     for (let i = 0; i < arr.length / 2; i++, k--) {
//         let k = arr.length - 1 - i;
//         let temp = arr[i];
//         arr[i] = arr[k];
//         arr[k] = temp;
//     }
//     console.log(arr.join(' '));
// }
// reverseInPlace([10, 20, 30, 40, 50, 60, 70 ]); 
// reverseInPlace([10, 20, 30, 40, 50, 60]);

function reverse(arr){
    for(let i =0; i < arr.length / 2; i++){
        let oldElement = arr[i];
        let preiousIndex = arr.length - 1 - i;
        arr[i] = arr[preiousIndex];
        arr[preiousIndex] = oldElement;
    }
    //console.log("'---'");
    console.log(arr.join(' '));
}
reverse([10, 20, 30, 40, 50, 60, 70 ]); 
reverse([10, 20, 30, 40, 50, 60]);