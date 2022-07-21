function tehPianist(data) {
    let num = data.shift();
    let listPiece = {}
    for (let i = 0; i < num; i++) {
        let line = data.shift()
        let [currPiece, currCom, currTon] = line.split('|');
        if (!listPiece.hasOwnProperty(currPiece)) {
            listPiece[currPiece] = {}
        }
        listPiece[currPiece][currCom] = currTon;
    }
    line = data.shift();
    while (line !== 'Stop') {
        let [command, song, compos, ton] = line.split('|')
        switch (command) {
            case 'Add':
                if (!listPiece.hasOwnProperty(song)) {
                    listPiece[song] = {}
                    if (!listPiece[song].hasOwnProperty(compos)) {
                        listPiece[song][compos] = 0
                    }
                    listPiece[song][compos] = ton
                    console.log(`${song} by ${compos} in ${ton} added to the collection!`)
                } else {
                    console.log(`${song} is already in the collection!`)
                }
                break;
            case 'Remove':
                if (listPiece.hasOwnProperty(song)) {
                    delete listPiece[song]
                    console.log(`Successfully removed ${song}!`)
                } else {
                    console.log(`Invalid operation! ${song} does not exist in the collection.`)
                }
                break;
            case 'ChangeKey':
                let changedKeyPiece = song;
                let changedKey = compos;
                if (listPiece.hasOwnProperty(changedKeyPiece)) {
                    let newValue = Object.keys(listPiece[changedKeyPiece])
                    newValueComposer = newValue.join(``)
                    listPiece[changedKeyPiece][newValueComposer] = changedKey
                    console.log(`Changed the key of ${changedKeyPiece} to ${changedKey}!`)
                } else {
                    console.log(`Invalid operation! ${changedKeyPiece} does not exist in the collection.`)
                }
                break;
        }
        line = data.shift();
    }
    for (let [piece, value] of Object.entries(listPiece)) {
        for (let [composer, key] of Object.entries(value)) {
            console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
        }
    }
    //console.table(listPiece);
}
tehPianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Add|Spring|Vivaldi|E Major',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);