function emojiDetector(input){
    let text = input.shift();
    let digits = text.match(/\d/g).map(Number);
    let emojis = text.match(/(::|\*\*)[A-Z][a-z]{2,}(\1)/g); // .map(e => e.slice(2, -2);
    let coolEmojis = [];

    let threshold = 1;
    for(let digit of digits){
        threshold *= digit
    }
   // console.log(emojis);
    if(emojis != null){
    for(let emoji of emojis){
        
        let coolnes = 0;
        let chars = emoji.slice(2, -2);
        
        for(let char of chars){
            coolnes += char.charCodeAt(0);
        }
        //console.log(coolnes);
        //console.log(emojis);
        if(coolnes >= threshold){
            coolEmojis.push(emoji);
        }
    }
}
    console.log('Cool threshold: ' + threshold);
    console.log(`${emojis ? emojis.length : 0} emojis found in the text. The cool ones are:`);
    for(let emoji of coolEmojis){
        console.log(emoji);
    }
    //console.log(coolEmojis);

}
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])