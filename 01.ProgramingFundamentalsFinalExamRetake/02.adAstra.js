function adAstra(array) {
    let regex = /([#|])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/g;
    let matches = []
    let totalNut = 0;
    let nutForDay = 2000;
    let match = regex.exec(array);

    while (match !== null) {
        let item = match[2];
        let data = match[3];
        let calories = match[4]
        calories = Number(calories);
           totalNut += calories
           match = regex.exec(array);
       matches.push(`Item: ${item}, Best before: ${data}, Nutrition: ${calories}`);
    }
    totalNut = Math.floor(totalNut / nutForDay)
   
    console.log(`You have food to last you for: ${totalNut} days!`);
    for(let line of matches){
        console.log(line);
    }
 
    // for (let [key, value] of Object.entries(matches)) {
    //     console.log(`Item: ${key}, Best before: ${value.data}, Nutrition: ${value.calories}`);
    // }
    //console.table(matches);
}
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
console.log('---------------------------------------');
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])

// You have food to last you for: 9 days!
// Item: Fish, Best before: 24/12/20, Nutrition: 8500
// Item: Ice Cream, Best before: 03/10/21, Nutrition: 9000
// Item: Milk, Best before: 05/09/20, Nutrition: 2000
// ---------------------------------------
// You have food to last you for: 0 days!

// function adAstra(array) {
//     const regex = /([#|])(?<item>[A-Z][a-z]+|[A-Z]+[a-z]+[a-z]+ [A-z]+[a-z]+)\1(?<data>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
//     let matches = []
//     let totalNut = 0;
//     let nutForDay = 2000;
//     let match = regex.exec(array);

//     while (match !== null) {
//         let item = match[2];
//         let data = match[3];
//         let calories = match[4]
//         //console.log(match);
//         calories = Number(calories);
//         matches.push({ item, data, calories })
//         totalNut += calories
//         match = regex.exec(array);
//     }
//     totalNut = Math.floor(totalNut / nutForDay)
//     console.log(`You have food to last you for: ${totalNut} days!`);
//     for (let value of Object.values(matches)) {
//         console.log(`Item: ${value.item}, Best before: ${value.data}, Nutrition: ${value.calories}`);
//     }
// }
// adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
// console.log('---------------------------------------');
// adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])

// // You have food to last you for: 9 days!
// // Item: Fish, Best before: 24/12/20, Nutrition: 8500
// // Item: Ice Cream, Best before: 03/10/21, Nutrition: 9000
// // Item: Milk, Best before: 05/09/20, Nutrition: 2000
// // ---------------------------------------
// // You have food to last you for: 0 days!


