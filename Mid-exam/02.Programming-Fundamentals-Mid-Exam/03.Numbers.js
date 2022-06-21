
function izpit(arr){
    let inventory = arr.shift().split(', ');
    let allCommand = [...arr];
    let index = 0
    let command = allCommand[index];
    index++;
 
 
    console.log(allCommand);
    //console.log(inventory)
 
    while (command !== 'Craft!'){
        let currentCommandLine = command.split(' - ');
        let currentCommand = currentCommandLine[0];
        let currentItem = currentCommandLine[1];
        if (currentCommand == 'Collect'){
            if (inventory.includes(currentItem)){
                command = allCommand[index];
                index++;
                continue;
            } else {
                inventory.push(currentItem);
            }
        } else if (currentCommand == 'Drop'){
            if (inventory.includes(currentItem)){
                let indexOfItemToDrop = inventory.indexOf(currentItem);
                inventory.splice(indexOfItemToDrop, 1);
            } else {
                command = allCommand[index];
                index++;
                continue;
            }
        } else if (currentCommand == 'Combine'){
            currentCommandLine = command.split(' - ');
            let ElForCombine = currentCommandLine[1].split(':');
            if (inventory.includes(ElForCombine[0])){
                let indexOfOldNumber = inventory.indexOf(ElForCombine[0]);
                inventory.splice(indexOfOldNumber, 0, ElForCombine[1]);
            } else {
                command = allCommand[index];
                index++;
                continue;
            }
        } else {
            if (inventory.includes(currentItem)){
                let indexOfItemToMove = inventory.indexOf(currentItem);
                inventory.splice(indexOfItemToMove, 1);
                inventory.push(currentItem)
            }
        }
        command = allCommand[index];
        index++;
    }
   // console.log(inventory)
}
izpit([ 
    'Iron, Sword, Gold',  
    'Renew - Sword', 
    'Craft!' 
  ])

// function numbers (sequence){
//     let arrOfStrings = sequence.split('');
    
//     let arrOfNumbers = [];
//     let sum = 0;

//     for(let el of arrOfStrings){
//         let currNum = Number(el);
//         arrOfNumbers.push(currNum);
//         sum += currNum
//     }

//     let avg = sum / arrOfNumbers.length
//     console.log(avg)

// }
// numbers('10 20 30 40 50')
// function x(input = String) {
//     let betterInput = input.split(' ').map(Number);
//     let avg = 0;
//     for (let i = 0; i < betterInput.length; i++) {
//         avg += betterInput[i];
//     }
//     let finalSum = avg / betterInput.length;

//     let newAvg = [];

//     for (let i = 0; i < betterInput.length; i++) {
//         if (finalSum < betterInput[i]) {
//             newAvg.push(betterInput[i])
//         }
//     }
    
//     if (newAvg.length <= 0) {
//         console.log('No');
//     }
//     if (newAvg.length > 5) {
//         let go = newAvg.sort((a, b) => b - a);
//         let sliced = go.splice(0, 5);
//         console.log(sliced.join(' '));

//     }
    
//     else if (newAvg.length < 5 && newAvg.length !== 0) {
//         let sorted = newAvg.sort((a, b) => b - a);
//         console.log(sorted.join(' '));
//     } 

// }

// x("10", "20", "30", "40", "50");