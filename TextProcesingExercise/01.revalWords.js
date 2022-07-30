function revealWords(words, sentence){
    let wordToReveal = words.split(', ');
    let sentenceArr = sentence.split(' ');
    let resultSentece = '';
    // console.log(wordToReveal);
    // console.log(sentenceArr);
    for(let el of wordToReveal){
        for(let word of sentenceArr){
            if(word.includes('*') && word.length === el.length){
                sentence = sentence.replace(word, el)
            }

        }
    }
    console.log(sentence);
}
revealWords('great',
'softuni is ***** place for learning new programming languages')