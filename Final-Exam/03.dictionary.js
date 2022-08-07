function dictionary(input) {
    let myNotebook = [];
    let notebook = input.shift().split('|')

    for (let key of notebook) {
        let [definition, explanation] = key.split(': ')
        myNotebook.push(definition.trim(), explanation.trim());
    }
    let words = input.shift().split('|');
    if (input[0] == 'Test') {
        for (let key of words) {
            if (myNotebook.includes(key.trim())) {
                console.log(`${key.trim()}:`);
                for (let i = 0; i < myNotebook.length; i += 2) {
                    if (myNotebook[i] == key.trim()) {
                        console.log(` -${myNotebook[i + 1].trim()}`);
                    }
                }
            }
        }
    } else {
        console.log(`${myNotebook[0].trim()} ${myNotebook[2].trim()}`);
    }
}

dictionary((["programmer: an animal, which turns coffee into code | developer: a magician",
    "fish | domino",
    "Hand Over"]))
console.log(`--------------`);
dictionary((["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"]));
console.log(`-------------`);
