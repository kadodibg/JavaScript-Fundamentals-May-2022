function printNThElement(arr) {
    let lastNum = arr.pop();
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % lastNum === 0) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '))
}
printNThElement(['5', '20', '31', '4', '20', '2'])
printNThElement(['dsa', 'asd', 'test', 'test', '2'])