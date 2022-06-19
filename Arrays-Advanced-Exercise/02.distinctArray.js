function distinctArray(arr){
    let newArray = [];
    for(let number of arr){
        if(!newArray.includes(number)){
            newArray.push(number);
        }
    }
    console.log(newArray.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2, 2, 1])



// function distinctArray(arr){
//     for(let i = 0; i < arr.length; i++){
//         let currElement = arr[i];
//             for(let j = i + 1; j < arr.length; j++){
//                 let nextElement = arr[j];
//                     if(currElement === nextElement){
//                     arr.splice(j, 1);
//                     j = j - 1; 
//                 }
//             }
//     }
//     console.log(arr.join(' '))
// }
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2, 2, 1])