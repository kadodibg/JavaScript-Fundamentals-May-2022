// function mergeArrays(arr1, arr2) {
//     let thirdArray = [];
//     for (let i = 0; i < arr1.length; i++) {
        
//         if (i % 2 === 0) {
//           thirdArray.push(Number(arr1[i]) + Number(arr2[i]));
//         } else {
//           thirdArray.push(`${arr1[i]}${arr2[i]}`);
//         }
//     }
//     console.log(thirdArray.join(' - '));
//     // output 22 - 1522 - 110 - 5636 - 46
// }
// mergeArrays(['5', '15', '23', '56', '35'],
//     ['17', '22', '87', '36', '11']);

let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1, 'Shark')
 console.log(myFish);
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]