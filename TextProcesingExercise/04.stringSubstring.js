function stringSubstring(searchWord, sentence){
    let words = sentence.split(' ');

    for(let word of words){
        if(word.toLowerCase() === searchWord.toLowerCase()){
            console.log(searchWord);
          return;
        }
    }
    console.log(`${searchWord} not found!`)
}
stringSubstring('javascript',
'JavaScript is the best programming language')
