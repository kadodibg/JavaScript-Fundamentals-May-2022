function makeADictionary(input){
    let dict = {}; 
    
    for(let element of input){
        let obj = JSON.parse(element)
        dict = Object.assign(dict, obj)
    }

    let sortedKeys = Object.keys(dict);
    sortedKeys.sort((a, b) => a.localeCompare(b));

    for(let term of sortedKeys){
        let defenition = dict[term];
        console.log(`Term: ${term} => Definition: ${defenition}`);
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])