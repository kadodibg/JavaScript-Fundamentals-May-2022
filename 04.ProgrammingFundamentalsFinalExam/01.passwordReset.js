function passwordReset(arr) {
    let data = arr.shift();
    let line = arr.shift();
    while (line !== 'Done') {
        let [command, ...more] = line.split(' ')
        switch (command) {
            case 'TakeOdd':
                let newWord = [];
                for (let i = 0; i < data.length; i++) {
                    if (i % 2 === 1) {
                        newWord.push(data[i])
                    }
                }
                data = newWord.join('')
                console.log(data);
                break;
            case 'Cut':
                data = data.split('');
                data.splice(more[0], more[1]);
                data = data.join('')
                console.log(data);
                break;
            case 'Substitute':
                if (data.includes(more[0])) {
                    for (let i = 0; i < data.length; i++) {
                        data = data.replace(more[0], more[1])
                    }
                    console.log(data);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
            case 'Done':
                console.log(`Your password is: ${data}"`);
                break;
            default:
                break;
        }
        line = arr.shift();
    }
    if (line === "Done") {
        console.log(`Your password is: ${data}`);
    }
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])