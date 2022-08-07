function solve(input) {
    let string = input.shift();

    let sub = input.shift();

    while (sub !== 'End') {
        let [command, ...more] = sub.split(' ')

        if (command == 'Translate') {
            let replacePlace = more[0];
            let replaceElement = more[1];
            for (let stings of string) {
                string = string.replace(replacePlace, replaceElement);
            }
            console.log(string);
        } else if (command == 'Includes') {
            let checkingValue = more[0]
            if (string.includes(checkingValue)) {
                console.log('True');
            } else {
                console.log("False");
            }
        } else if (command == 'Start') {
            let checkingValue = more[0]
            if (string.startsWith(checkingValue)) {
                console.log("True");
            } else {
                console.log('False');
            }
        } else if (command == 'Lowercase') {
            string = string.toLowerCase();
            console.log(string);
        } else if (command == 'FindIndex') {
            let index = more[0];
            console.log(string.lastIndexOf(index));
        } else if (command == 'Remove') {
            let removeFrom = Number(more[0]);
            let removeTo = Number(more[1]);
            //console.log(more[1]);
            let newS = string.substring(0, more[0])
            let newSS = string.substring(removeTo + removeFrom)
            string = newS + newSS
            console.log(string);


        }
        sub = input.shift();
    }

}
solve(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])
console.log('-----');
solve(["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"])