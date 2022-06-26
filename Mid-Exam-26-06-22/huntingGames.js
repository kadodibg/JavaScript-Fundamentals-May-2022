function theHuntingGames(input) {
    
    let days = Number(input.shift());
    let players = Number(input.shift());
    let totalEnergy = Number(input.shift());
    let waterPerDay = Number(input.shift());
    let foodPerDay = Number(input.shift());
   
    let totalWater = waterPerDay * players * days;
    let totalFood = foodPerDay * players * days;

    for (let i = 1; i <= days; i++) {
        let energyLost = Number(input.shift());
        totalEnergy -= energyLost;
        if (totalEnergy <= 0) {
            break;
        }
        if (i % 2 == 0) {
            totalEnergy += (totalEnergy * 0.05);
            totalWater = totalWater - (totalWater * 0.30);
        }
        if (i % 3 == 0) {
            totalFood -= totalFood / players;
            totalEnergy += (totalEnergy * 0.10);
        }

    }
    if (totalEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${totalEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }

}
theHuntingGames(["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"])
// huntingGames(["12",
//     "6",
//     "4430",
//     "9.8",
//     "5.5",
//     "620.3",
//     "840.2",
//     "960.1",
//     "220",
//     "340",
//     "674",
//     "365",
//     "345.5",
//     "212",
//     "412.12",
//     "258",
//     "496"])
