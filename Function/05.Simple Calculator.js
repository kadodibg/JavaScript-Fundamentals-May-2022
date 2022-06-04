function simpleCalculator(a, b, operator) {
    let result = 0;
    switch (operator) {
        case "multiply":
            let multiply = (a, b) => a * b;
            result = multiply(a, b);
            break;
        case "divide":
            let divide = (a, b) => a / b;
            result = divide(a, b);
            break;
        case "add":
            let add = (a, b) => a + b;
            result = add(a, b);
            break;
        case "subtract":
            let subtract = (a, b) => a - b;
            result = subtract(a, b)
            break;
    }
    console.log(result)
}
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');