function firstAndLastKNumbers(arr) {
    let k = arr.shift();
    let firstK = arr.slice(0, k);
    let lastK = arr.slice(-k);
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9]);