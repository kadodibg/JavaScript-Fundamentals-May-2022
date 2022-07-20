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
                // if (word.includes(newSubstring)) {
                 let reversed = newSubstring.split('').reverse().join('')
                let indexOf = word.indexOf(newSubstring);
                console.log(indexOf);
                let partFirst = word.slice(0, indexOf)
                console.log(partFirst);
                let secondPart = word.slice(indexOf + newSubstring.length, word.length)
                console.log(secondPart);   
                let substr = more[0];

                    if (word.includes(substr)) {
                        // -> PREMAHNATO <-
                        // let wordForRev = word.split('')
                        // .slice(word.indexOf(substr))
                        // .reverse()
                        // .join('');
    
                        let wordForRev = substr.split('').reverse().join('');
                        let indexOf = word.indexOf(substr);
                        let startInd = word.length - substr.length //
                        let endInd = substr.length //
                       console.log(startInd);
                       // console.log(endInd);
                        
                        word = word.split('')
                        console.log(word);
                        word.splice(startInd, endInd, wordForRev)
                        console.log(word);
                        word = word.join('')
                        
                //         // Alternative
                //        // wordForRev = wordForRev.split("").reverse().join("");
                //         word = word.substring(0, word.indexOf(substr));
                //         word = word + wordForRev;
                console.log(word);
                    } else {
                        console.log("error");
                    }
            //  // -> PREMAHNATO <-
            //    let substr = more[0];
            //     if (word.includes(substr)) {
            //         // -> PREMAHNATO <-
            //         let wordForRev = word.split('')
            //         .slice(word.indexOf(substr))
            //         .reverse()
            //         .join('');

            //         // let substr = more[0].split('').reverse().join('');
            //         // let startInd = Number(word.length - substr.length)
            //         // let endInd = Number(word.length - substr.length -1)
            //         // word = word.split('')
            //         // word.splice(startInd, endInd, substr)
            //         // word = word.join('')
                    
            //         // Alternative
            //        // wordForRev = wordForRev.split("").reverse().join("");
            //         word = word.substring(0, word.indexOf(substr));
            //         word = word + wordForRev;
            //        console.log(word);
            //     } else {
            //         console.log("error");
            //     }
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