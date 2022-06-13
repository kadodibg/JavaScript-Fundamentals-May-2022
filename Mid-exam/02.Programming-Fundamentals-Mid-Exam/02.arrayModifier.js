function arrayModifier(arr){
    let index = 0;
    index++
    let array = arr.shift().split(' ').map(Number);
    let command = arr.shift();

    while(command != 'end' ){
    let tokens = command.split(' ');

    console.log(tokens[0])
 
   
    command = arr.shift();
    }

}
arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);