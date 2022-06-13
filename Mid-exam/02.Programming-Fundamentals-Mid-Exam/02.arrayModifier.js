function arrayModifier(arr) {
    let array = arr.shift().split(' ');
    let r = arrToNumber(array);    
    function arrToNumber(arr){
        let result = [];
        for(let element of arr){
            result.push(Number(element));
        }
        return result;
    }

    let command = arr.shift().split(' ');
    while (command !== 'end') {
        if (command[0] == 'swap') {
        [r[command[1]], r[command[2]]] = [r[command[2]], r[command[1]]];
        } else if (command[0] == 'multiply'){ 
        r[command[1]] *= r[command[2]];
        } else if (command[0] == 'decrease') 
        for (let i = 0; i < r.length; i++) { 
            r[i] -= 1;
        }
            if (command == 'end') { break; }
            command = arr.shift().split(' ');
        }
    console.log(r.join(', '));
}
arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease','pesho', 'end']);