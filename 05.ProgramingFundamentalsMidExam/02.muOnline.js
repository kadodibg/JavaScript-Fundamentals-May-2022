function muOnline(array) {
    let rooms = array.shift().split('|');
    let health = 100;
    let bitcoins = 0;
    let notDead = true;

    for(let i = 0; i < rooms.length; i++){
        let command = rooms[i];
        let splitted = command.split(' ');
      
        if(splitted[0] === 'potion'){

        }else if(splitted[0] === 'chest'){
            bitcoins += Number(splitted[1])
            console.log(`You found ${bitcoins} bitcoins.`);

        }else{
            let attack = Number(splitted[1])
            health -= attack;
            if(health <= 0){
                console.log(`You died! Killed by ${splitted[0]}.`);
                console.log(`Best room: ${i + 1}`);
                notDead = false;
                
            }else if(health > 0){
                console.log(`You slayed ${splitted[0]}.`);
            }

        }
        if (!notDead) {
            break;
        }
    }
    if (notDead) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])