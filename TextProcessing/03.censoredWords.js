function censoredWords(text, word){
    
    let newText = text.split(word);
    let result = newText.join('*'.repeat(word.length))

    //console.log(newText);
    console.log(result);
}
censoredWords('A small sentence with some words', 'small')

// function censoredWords(text, word){
//     while(text.indexOf(word) >= 0){
//         text = text.replace(word, "*".repeat(word.length))
//     }
//     console.log(text);
// }
// censoredWords('A small sentence with some words', 'small')