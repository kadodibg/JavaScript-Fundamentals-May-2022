//100/100
function secretChat(arr) {
    let word = arr.shift();

    for (let line of arr) {
        let [command, ...more] = line.split(":|:");
        if (line === "Reveal") {
            break;
        }
        switch (command) {
            case "ChangeAll":
                while (word.includes(more[0])) {
                    word = word.replace(more[0], more[1]);
                }
                console.log(word);
                break;
            case "Reverse":
                let newSubstring = more[0];
 
                if (word.includes(newSubstring)) {
                    let reversed = newSubstring.split('').reverse().join('')
                    let indexOf = word.indexOf(newSubstring);
                    let partFirst = word.slice(0, indexOf)
                    let secondPart = word.slice(indexOf + newSubstring.length, word.length)
                    word = partFirst + secondPart + reversed
 
                    console.log(word)
                } else {
                    console.log(`error`)
                }
                break;
            case "InsertSpace":
                let position = more[0];
                word = word.split("");
                word.splice(position, 0, ' ');
                word = word.join("");
                console.log(word);
                break;
            default:
                break;
        }
    }
    console.log(`You have a new text message: ${word}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])
console.log("---------------------------");
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
// 75/100
// function secretChat(arr) {
//     let word = arr.shift();

//     for (let line of arr) {
//         let [command, ...more] = line.split(":|:");
//         if (line === "Reveal") {
//             break;
//         }
//         switch (command) {
//             case "ChangeAll":
//                 while (word.includes(more[0])) {
//                     word = word.replace(more[0], more[1]);
//                 }
//                 console.log(word);
//                 break;
//             case "Reverse":
//                 let newSubstring = more[0];
 
//                 if (word.includes(newSubstring)) {
//                     let reversed = newSubstring.split('').reverse().join('')
//                     let indexOf = word.indexOf(newSubstring);
//                     let partFirst = word.slice(0, indexOf)
//                     let secondPart = word.slice(indexOf + newSubstring.length, word.length)
//                     word = partFirst + secondPart + reversed
 
//                     console.log(word)
//                 } else {
//                     console.log(`error`)
//                 }
//                 break;
//             case "InsertSpace":
//                 let position = more[0];
//                 word = word.split("");
//                 word.splice(position, 0, ' ');
//                 word = word.join("");
//                 console.log(word);
//                 break;
//             default:
//                 break;
//         }
//     }
//     console.log(`You have a new text message: ${word}`);
// }
// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
//   ])
// console.log("---------------------------");
// secretChat([
//   "Hiware?uiy",
//   "ChangeAll:|:i:|:o",
//   "Reverse:|:?uoy",
//   "Reverse:|:jd",
//   "InsertSpace:|:3",
//   "InsertSpace:|:7",
//   "Reveal",
// ]);