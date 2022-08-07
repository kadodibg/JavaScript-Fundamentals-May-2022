function bossRush(input) {
    let n = input.shift('');

    for (let i = 0; i < n; i++) {
        let text = input.shift();
        let regex = /\|(?<Name>[A-Z]{4,})\|\:\#(?<Title>[A-Za-z]+\s[A-Za-z]+)\#/;
        let match = text.match(regex)
        if (match) {
            let name = match.groups['Name'];
            let title = match.groups["Title"];
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${title.length}`);
        }
        else {
            console.log("Access denied!");

        }
    }
}
bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#']);
console.log("----------------------");
bossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#']);