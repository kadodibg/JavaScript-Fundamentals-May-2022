function meetings(data){

    let result = {};

    for(let line of data){
        let [day, name] = line.split(' ');
        if(result.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else {
            result[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for(let [key, value] of Object.entries(result)){
        console.log(`${key} -> ${value}`);
    }
}
meetings(['Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim'])