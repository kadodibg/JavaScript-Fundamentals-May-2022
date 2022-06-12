function reverseString(num) {
    let result = "";

    for (let index = num.length - 1; index <= num.length && index > -1; index--) {
        result += (num[index])
    }

    console.log(result)
}
reverseString('Hello');