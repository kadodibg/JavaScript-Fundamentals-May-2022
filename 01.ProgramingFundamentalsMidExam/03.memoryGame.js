function memoryGame(input) {

    let numbers = input.shift().trim().split(' ');
    let moves = 0;

    while (numbers.length > 1 && input[0].toLowerCase() !== 'end') {
        let [index1, index2] = input.shift().split(' ');
        index1 = Number(index1);
        index2 = Number(index2);
        moves++;

        if (index1 < 0 || index1 >= numbers.length || index1 === index2 || index2 < 0 || index2 >= numbers.length) {
            const index = Math.trunc(numbers.length / 2);
            const symbol = '-' + moves + 'a';
            numbers.splice(index, 0, symbol, symbol);
            console.log('Invalid input! Adding additional elements to the board')
        }
        else {
            let num1 = numbers[index1];
            let num2 = numbers[index2];
            if (num1 === num2) {
                numbers.splice(index1, 1);
                index2 = numbers.indexOf(num2);
                numbers.splice(index2, 1);
                console.log(`Congrats! You have found matching elements - ${num1}!`);
            } else if (num1 !== num2) {
                console.log('Try again!');
            }

        }
    }
    if (numbers.length === 0 || numbers.length === 1) {
        console.log(`You have won in ${moves} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(`${numbers.join(' ')}`);
    }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"])