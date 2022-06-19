// function arrayModifier(arr) {
//     let r = arr.shift().split(' ');    

//     function arrToNumber(arr){
//         let result = [];
//         for(let element of arr){
//             result.push(Number(element));
//         }
//         return result;
//     }

//     let command = arr.shift().split(' ');

//     while (command !== 'end') {
//         if (command[0] == 'swap') {
        
//             [r[command[1]], r[command[2]]] = [r[command[2]], r[command[1]]];

//         } else if (command[0] == 'multiply'){  
//             r[command[1]] *= r[command[2]];
//         } else if (command[0] == 'decrease') 
        
//         for (let i = 0; i < r.length; i++) { 
//             r[i] -= 1;
//         }
//             if (command == 'end') { break; }
//             command = arr.shift().split(' ');
//         }
//     console.log(r.join(', '));
// }
// arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease','pesho', 'end']);

function arrayAdvanced(nums, commands){

    for(let i = 0; i < commands.length; i++){
        let currValues = commands[i].split(' ');
        let currCommand = currValues.shift();
        
        currValues = currValues.map(Number);
       
       // console.log(currValues);
        
        let sumPairs = 0;
        let pairsOfSumNums = [];

        switch (currCommand){
            case 'add':
                let indexToAdd = currValues[0];
                let elementToAdd = currValues[1];
                nums.splice(indexToAdd,0, elementToAdd);
                break;
            case 'addMany':
                let indexToAddMany = currValues.shift();
                nums.splice(indexToAddMany, 0 , [...currValues]);
                break;
            case 'contains':
               console.log(nums.indexOf(currValues[0]));
                break;
            case 'remove':
                let indexToRemove = currValues[0];
                nums.splice(indexToRemove, 1);
                break;
            case 'shift':

            case 'sumPairs':
            case 'print':
                break;

        }
       
    }
    // console.log(nums);
    // console.log(commands);
    console.log(nums);

}
arrayAdvanced([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayAdvanced([1, 2, 4, 5, 6, 7], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);



// function arrayModifier(arr) {
//     let array = arr.shift().split(' ');
//     let command = arr.shift().split(' ');
//     while (command !== 'end') {
//         let el = command[1];
//         let el1 = command[2];
//         if (command[0] == 'swap') {
//             [array[el], array[el1]] = [array[el1], array[el]];

//         } else if (command[0] == 'multiply') {
//             array[el] *= array[el1];
//         } else if (command[0] == 'decrease') {
//             for (let i = 0; i < array.length; i++) {
//                 array[i] -= 1;
//             }
//         }
//         if (command == 'end') {
//             break;
//         }
//         command = arr.shift().split(' ');
//     }
//     console.log(array.join(', '))
// }
// arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease','pesho', 'end']);