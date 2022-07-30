function blackFlag(input){
    let days = Number(input.shift());
    let plunder = Number(input.shift());
    let expectPlunder = Number(input.shift());

    let tempPlunder = 0;
    let totalPlunder = 0;

    for(let i = 1; i <= days; i++){
        tempPlunder += plunder;

        if(i % 3 === 0){
            tempPlunder += plunder * 0.5
        } 
        
        if (i % 5 === 0){
             tempPlunder -= tempPlunder * 0.3
         }
    }

    if (tempPlunder >= expectPlunder){
        console.log(`Ahoy! ${tempPlunder.toFixed(2)} plunder gained.`);
    }else{
        totalPlunder = tempPlunder / expectPlunder * 100;
        console.log(`Collected only ${totalPlunder.toFixed(2)}% of the plunder.`);
    }

    // console.log(days);
    // console.log(plunder);
    // console.log(expectPlunder);
    //console.log(tempPlunder);
}
blackFlag(["5","40","100"]);
blackFlag((["10",
"20",
"380"]));