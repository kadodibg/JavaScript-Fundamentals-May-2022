function counterStrike(arr){
    let health = Number(arr.shift());
    let wonBattle = 0;
    
    for(let commands of arr){
        if(commands !== 'End of battle'){
            let energy = Number(commands);
            
            health -= energy;
            wonBattle++;

            if (wonBattle % 3 === 0){
                health += wonBattle;
            }

            if(health - energy < 0 ){
                console.log(`Not enough energy! Game ends with ${wonBattle} won battles and ${health} energy`);
                return
            }
        }else{
            console.log(`Won battles: ${wonBattle}. Energy left: ${health}`);
        }
    }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);