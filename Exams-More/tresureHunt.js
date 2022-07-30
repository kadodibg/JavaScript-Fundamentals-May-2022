function tresureHunt(data){
    let state = data.shift().split("|");
    
    let index = 0;
    let command = data[index++];
    let i;
    
    
    while(command !== "Yohoho!"){
        let tokens = command.split(" ");
        let operations = tokens.shift();
        
        switch (operations){
            case 'Loot': 
                for(let el of tokens){
                    if(!state.includes(el)){
                        state.unshift(el);
                    }
                }
                break;
            case 'Drop':
                i = Number(tokens[0]);
                if(i < 0 || i > state.length){
                    command = data[index++];
                    continue;
                }

                let element = state.splice(tokens, 1);
                
                
                state.push(element[0])   
            break;
            case 'Steal': 
            let items = state.splice(-Number(tokens));
            console.log(items.join(', '));
            break;
                    }
        command = data[index++];
    }
    
    //console.log(state);
    if(state.length > 0 ){
        
    let sum = 0;
   
    for(let el of state){
        sum += el.length;
    }
    let avg = sum / state.length;
    console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }else{
        console.log('Failed treasure hunt.');
    }

}
// tresureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])
 console.log('----------------------------');
// tresureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"])
tresureHunt(['Silver|Shotgun', 'Drop 5', "Yohoho!"])