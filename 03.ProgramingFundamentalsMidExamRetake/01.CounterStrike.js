function counterStrike(input) {
    let wonBattle = 0;
    let health = Number(input.shift());
    for (const commands of input) {
        if (commands !== 'End of battle') {
            let energy = Number(commands);
            if (health - energy < 0) {
                console.log(`Not enough energy! Game ends with ${wonBattle} won battles and ${health} energy`);
                return;
            }
            health -= energy;
            wonBattle++;
        } else {
            console.log(`Won battles: ${wonBattle}. Energy left: ${health}`);
        }
        if (wonBattle % 3 === 0) {
            health += wonBattle;
        }
    }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"])