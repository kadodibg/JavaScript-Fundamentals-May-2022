function sortNumbers(firstNum, secondNum, thirdNum) {
    let arrayNumbers = [];
    arrayNumbers.push(firstNum, secondNum, thirdNum);
    let sorted = arrayNumbers.sort((a, b) => b - a);
    console.log(sorted.join('\n'));
}
sortNumbers(2, 1, 3)