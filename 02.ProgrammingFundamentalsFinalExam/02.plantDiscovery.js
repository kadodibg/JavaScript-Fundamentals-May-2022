function plantDiscovery(arr){
    let num = Number(arr.shift())
    let plantsList = {};

    for(let i = 0; i < num; i++){
        let line = arr.shift();
        let [plant, rarity] = line.split('<->');
        rarity = Number(rarity)
        plantsList[plant] = { rarity, rating: [] }
    }
    let line = arr.shift();
    while(line !== 'Exhibition'){
        let [command, ...rest] = line.split(': ');
        let [plant, data] = rest[0].split(' - ');
        
        if(plantsList.hasOwnProperty(plant)){
        switch(command){
            case 'Rate':
            let rating = Number(data);
            plantsList[plant].rating.push(rating)
            break;

            case 'Update':
            let newRarity = Number(data);
            plantsList[plant].rarity = newRarity
            break;

            case 'Reset':
            plantsList[plant].rating = []
            break;

            default:
            console.log('error');
            break;
            }
        }else{
        console.log('error');
            }
        line = arr.shift();
    }
   
    let sortedPlants = Object.keys(plantsList).sort((a, b) =>
            
            plantsList[b].rarity - plantsList[a].rarity ||
            average(plantsList[b].rating) - average(plantsList[a].rating)
    );

    console.log(`Plants for the exhibition:`);
    
    for (let plant of sortedPlants) {
        console.log(`- ${plant}; Rarity: ${plantsList[plant].rarity}; Rating: ${average(plantsList[plant].rating).toFixed(2)}`);
    }

   function average(input) {
    if (!input.length) return 0;
    return input.reduce((a, b) => a + b, 0) / input.length;
}
}
plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]))