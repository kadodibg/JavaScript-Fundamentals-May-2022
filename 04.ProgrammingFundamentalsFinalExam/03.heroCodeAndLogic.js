function heroOfCode(input) {
    let num = Number(input.shift())
    let hList = {};

    for (let i = 0; i < num; i++) {
        let line = input.shift();
        let [hero, hp, mp] = line.split(' ');
        hp = Number(hp);
        mp = Number(mp)
        hList[hero] = { hp, mp }
    }
    let line = input.shift();
    while (line !== 'End') {
        let [command, hero, ...more] = line.split(' - ');
        let maxHp = 100;
        let maxMp = 200;

        if (hList.hasOwnProperty(hero)) {
            // console.log(command);
            switch (command) {
                case 'CastSpell':
                    let mpNeded = more[0];
                    let somName = more[1];
                    let result = 0;
                    let [key, value] = Object.values(hList[hero]);
                    if (mpNeded <= value && value <= maxMp) {
                        result = value - mpNeded
                        hList[hero].mp = result
                        console.log(`${hero} has successfully cast ${somName} and now has ${result} MP!`);
                    } else {
                        console.log(`${hero} does not have enough MP to cast ${somName}!`);
                    }
                    break;
                case 'TakeDamage':
                    let attacer = more[1];
                    let dam = more[0];
                    let [keys, val] = Object.values(hList[hero]);
                    let res = 0

                    if (dam < keys) {
                        res = keys - dam
                        hList[hero].hp = res
                        console.log(`${hero} was hit for ${dam} HP by ${attacer} and now has ${res} HP left!`);
                    } else {
                        console.log(`${hero} has been killed by ${attacer}!`);
                        delete hList[hero];
                    }
                    break;
                case 'Recharge':
                    let amount = Number(more[0])
                    let [k, v] = Object.values(hList[hero]);
                    //console.log(v);
                    let re = v + amount
                    hList[hero].mp = re
                    //console.log(re);

                    if (maxMp <= re) {
                        //console.log(k);
                        re = maxMp
                        hList[hero].mp = re
                        //console.log(v);
                        let rec = maxMp - v;
                        console.log(`${hero} recharged for ${rec} MP!`);

                    } else {
                        console.log(`${hero} recharged for ${amount} MP!`);
                    }
                    break;
                case 'Heal':
                    let am = Number(more[0])
                    let [ke, ve] = Object.values(hList[hero]);
                    //console.log(v);
                    let rest = ke + am
                    hList[hero].hp = rest
                    //console.log(re);

                    if (maxHp <= rest) {
                        //console.log(k);
                        rest = maxHp
                        hList[hero].hp = rest
                        //console.log(v);
                        let recc = maxHp - ke;
                        console.log(`${hero} healed for ${recc} HP!`);

                    } else {
                        console.log(`${hero} healed for ${am} HP!`);
                    }
                    break;
                default:
                    break;
            }
        }
        line = input.shift();
    }

    for (let [hero, value] of Object.entries(hList)) {
        let hP = 0;
        let mP = 0;
        for (let [type, amount] of Object.entries(value)) {
            if (type === 'hp') {
                hP = amount
            } else {
                mP = amount
            }
        }
        console.log(`${hero}\nHP: ${hP}\nMP: ${mP}`);
    }
 // console.table(hList);
}
heroOfCode(['4',
'Adela 90 150',
'SirMullich 70 40',
'Ivor 1 111',
'Tyris 94 61',
'Heal - SirMullich - 50',
'Recharge - Adela - 100',
'CastSpell - Tyris - 1000 - Fireball',
'TakeDamage - Tyris - 99 - Fireball',
'TakeDamage - Ivor - 3 - Mosquito',
'End'])
console.log('-----------------------');
heroOfCode(['2',
'Solmyr 85 120',
'Kyrre 99 50',
'Heal - Solmyr - 10',
'Recharge - Solmyr - 50',
'TakeDamage - Kyrre - 66 - Orc',
'CastSpell - Kyrre - 15 - ViewEarth',
'End']);
