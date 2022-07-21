function activationKeys(input) {
    let actKey = input.shift();
    let line = input.shift();
    while (line !== "Generate") {
        let [command, ...more] = line.split('>>>');
        switch (command) {
            case 'Contains':
                let inc = more[0]
                if (actKey.includes(inc)) {
                    console.log(`${actKey} contains ${inc}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            case 'Flip':
                let currCom = more[0];
                let startInd = more[1];
                let endInd = more[2];
                let txt1 = actKey.substring(0, startInd);
                let txt2 = actKey.substring(endInd);
                let flipped = actKey.substring(startInd, endInd); // sreden text
                if (currCom === "Upper") {
                    flipped = flipped.toUpperCase();
                } else {
                    flipped = flipped.toLowerCase();
                }
                actKey = txt1 + flipped + txt2
                console.log(actKey);
                break;
            case 'Slice':
                if (more[0] >= 0 && more[1] < actKey.length - 1) {
                    let start = actKey.slice(0, more[0]);
                    let end = actKey.slice(more[1], actKey.length)
                    actKey = start + end
                    console.log(actKey);
                }
                break;
            default:
                break;
        }
        line = input.shift();
    }
    if (line === "Generate") {
        console.log(`Your activation key is: ${actKey}`);
    }
}
activationKeys(["134softsf5ftuni2020rockz42",
                "Slice>>>3>>>7",
                "Contains>>>-rock",
                "Contains>>>-uni-",
                "Contains>>>-rocks",
                "Flip>>>Upper>>>2>>>8",
                "Flip>>>Lower>>>5>>>11",
                "Generate"]);
console.log('-------------------------------');
activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
