function arrayModifier(arr) {
    let array = arr.shift().split(' ');
    let command = arr.shift().split(' ');
    while (command !== 'end') {
        if (command[0] == 'swap') {
            [array[command[1]], array[command[2]]] = [array[command[2]], array[command[1]]];
        } else if (command[0] == 'multiply') {
            array[command[1]] *= array[command[2]];
        } else if (command[0] == 'decrease') {
            for (let i = 0; i < array.length; i++) {
                array[i] -= 1;
            }
        }
        if (command == 'end') { break; }
        command = arr.shift().split(' ');
    }
    console.log(array.join(', '))
}
arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease','pesho', 'end']);