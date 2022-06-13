function arrayModifier(arr) {
    let array = arr.shift().split(' ');
    let command = arr.shift().split(' ');
    while (command !== 'end') {
        let el = command[1];
        let el1 = command[2];
        if (command[0] == 'swap') {
            [array[el], array[el1]] = [array[el1], array[el]];

        } else if (command[0] == 'multiply') {
            array[el] *= array[el1];
        } else if (command[0] == 'decrease') {
            for (let i = 0; i < array.length; i++) {
                array[i] -= 1;
            }
        }
        if (command == 'end') {
            break;
        }
        command = arr.shift().split(' ');
    }
    console.log(array.join(', '))
}
arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease','pesho', 'end']);