function worldTour(array) {
    let destination = array.shift();
    let line = array.shift();
    while (line !== "Travel") {
        [command, index, position] = line.split(`:`)
        switch (command.trim()) {
            case "Add Stop":
                let startIndex = Number(index);
                let endIndex = position;
                if (index >= 0 && index <= index) {
                    destination = destination.split('');
                    destination.splice(startIndex, 0, endIndex)
                    destination = destination.join('');
                }
                break;
            case "Remove Stop":
                let startInd = Number(index);
                let endInd = Number(position);
                if (startInd >= 0 &&
                    startInd < destination.length &&
                    endInd >= 0 &&
                    endInd < destination.length &&
                    startInd <= endInd) {
                    destination = destination.split('');
                    destination.splice(startInd, endInd - startInd + 1);
                    destination = destination.join('')
                }
                break;
            case "Switch":
                if (destination.includes(index)) {
                    destination = destination.replace(index, position)
                }
                //console.log(destination);
                break;
        }
        console.log(destination);

        line = array.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${destination}`)
}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel'])