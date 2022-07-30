function convertToObject(objAsString){
    let obj = JSON.parse(objAsString);
   
    for (let key of Object.keys(obj)){
        console.log(`${key}: ${obj[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');