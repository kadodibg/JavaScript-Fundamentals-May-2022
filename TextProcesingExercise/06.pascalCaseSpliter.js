function pascalCaseSplitter(text) {
    text = text.split("");
    let result = [];
   
    text.forEach(el => {
        if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
            result.push(el)
        } else if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
            result[result.length - 1] += el;
        }
    })
    console.log(result.join(", "));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')