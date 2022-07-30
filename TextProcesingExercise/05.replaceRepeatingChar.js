function replaceRepeatingChar(input) {

    let index = 1;
    let edn = input.length;
    let text = input[0];

    while (index < edn) {
        if (input[index] !== input[index - 1]) {
            text += input[index];
        }
        index++;
    }
    console.log(text);
}
replaceRepeatingChar('aaaaabbbbbcdddeeeedssaa')