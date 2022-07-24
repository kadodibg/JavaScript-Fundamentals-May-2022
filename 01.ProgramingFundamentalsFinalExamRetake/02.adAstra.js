function adAstra(array) {
    const regex = /([#|])(?<item>[A-Z][a-z]+|[A-Z]+[a-z]+[a-z]+ [A-z]+[a-z]+)\1(?<data>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let matches = []
    let totalNut = 0;
    let nutForDay = 2000;
    let match = regex.exec(array);

    while (match !== null) {
        let item = match[2];
        let data = match[3];
        let calories = match[4]
        //console.log(match);
        calories = Number(calories);
        matches.push({ item, data, calories })
        totalNut += calories
        match = regex.exec(array);
    }
    totalNut = Math.floor(totalNut / nutForDay)
    console.log(`You have food to last you for: ${totalNut} days!`);
    for (let value of Object.values(matches)) {
        console.log(`Item: ${value.item}, Best before: ${value.data}, Nutrition: ${value.calories}`);
    }
}
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
console.log('---------------------------------------');
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])