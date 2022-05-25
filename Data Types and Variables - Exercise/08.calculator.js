function calculator(number, operator, anNumber) {
    let sum = 0;
    switch (operator) {
        case "+":
            sum = number + anNumber
            console.log(sum.toFixed(2));
            break;
        case "-":
            sum = number - anNumber;
            console.log(sum.toFixed(2));
            break;
        case "*":
            sum = number * anNumber;
            console.log(sum.toFixed(2));
            break;
        case "/":
            sum = number / anNumber;
            console.log(sum.toFixed(2));
            break;
    }
}
calculator(5, "+", 10);