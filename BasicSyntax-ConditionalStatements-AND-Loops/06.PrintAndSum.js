function printAndSum(startNum, endNum) {
    let sum = 0;
    let squence = '';
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        squence += i + " ";
    }
    console.log(squence);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);