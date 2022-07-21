function pirates(input) {
    let towns = {}
    let line = input.shift();

    while (line !== "Sail") {
        let [town, people, gold] = line.split('||')
        people = Number(people)
        gold = Number(gold)

        if (!towns.hasOwnProperty(town)) {
            towns[town] = { people, gold }
        } else {
            towns[town].people += people;
            towns[town].gold += gold;
        }
        line = input.shift();
    }

    while (line !== 'End') {
        let [command, town, ...more] = line.split('=>');
        switch (command) {
            case 'Plunder':
                let people = Number(more[0]);
                let gold = Number(more[1]);
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                towns[town].people -= people
                towns[town].gold -= gold
                if (towns[town].people <= 0 || towns[town].gold <= 0) {
                    console.log(`${town} has been wiped off the map!`);
                    delete towns[town];
                }
                break;
            case 'Prosper':
                let golds = Number(more[0]);

                if (golds >= 0) {
                    towns[town].gold += golds;
                    console.log(`${golds} gold added to the city treasury. ${town} now has ${towns[town].gold} gold.`);

                } else {
                    console.log(`Gold added cannot be a negative number!`);
                }
                break;
            default:
                break;
        }
        line = input.shift();
    }
    
    let size = Object.keys(towns).length;
    
    if (size > 0) {
        console.log(`Ahoy, Captain! There are ${size} wealthy settlements to go to:`)
        for (let [key, value] of Object.entries(towns)) {
            console.log(`${key} -> Population: ${value.people} citizens, Gold: ${value.gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
    //console.table(towns);
}
pirates(["Nassau||95000||1000",
        "San Juan||930000||1250",
        "Campeche||270000||690",
        "Port Royal||320000||1000",
        "Port Royal||100000||2000",
        "Sail",
        "Prosper=>Port Royal=>-200",
        "Plunder=>Nassau=>94000=>750",
        "Plunder=>Nassau=>1000=>150",
        "Plunder=>Campeche=>150000=>690",
        "End"])
console.log('----------');
pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])